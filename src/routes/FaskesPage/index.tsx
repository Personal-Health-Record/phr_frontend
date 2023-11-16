import { useCallback, useEffect, useState } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SearchBar from "./components/SearchBar";
import { Faskes, dummyFaskes } from "./constants";
import CardFaskesLocation from "./components/CardFaskesLocation";
import ChipTypes from "./components/ChipTypes";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import CircleLoader from "../../components/CircleLoader";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const FaskesPage = () => {
  const navigate = useNavigate();
  const [filteredFaskes, setFilteredFaskes] = useState<Faskes[]>(dummyFaskes);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [typeFilter, setTypeFilter] = useState("");

  const [markerPosition, setMarkerPosition] = useState({
    lat: -6.218938755964828,
    lng: 106.81725999301412,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDITiNAxw43DqK1QeYXeaoTfFFJS8C8Rkk",
  });

  const handleOnSearch = (val: string) => {
    if (val === "") {
      setFilteredFaskes(dummyFaskes);
    } else {
      const filtered = dummyFaskes.filter((faskes) =>
        faskes.name.toLowerCase().includes(val)
      );

      setFilteredFaskes(filtered);
    }
  };

  const successCallback = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setMarkerPosition({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    if (typeFilter === "" || typeFilter === "Semua") {
      setFilteredFaskes(dummyFaskes);
    } else {
      const filtered = dummyFaskes.filter(
        (faskes) => faskes.type === typeFilter
      );

      setFilteredFaskes(filtered);
    }
  }, [typeFilter]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback);
    }
  }, []);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (window.google) {
        const bounds = new window.google.maps.LatLngBounds(markerPosition);
        map.fitBounds(bounds);

        setMap(map);
      }
    },
    [markerPosition]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const handleChangeMap = (lat: number, lng: number) => {
    setMarkerPosition({ lat: lat, lng: lng });
    if (window !== undefined) {
      window.scrollTo(0, 0);
    }
  };

  const handleClickCard = (id: number) => {
    navigate(`/faskes/details?id=${id}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      {/* Maps section */}
      {!isLoaded ? (
        <div className="flex justify-center items-center mt-10">
          <CircleLoader />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-3 justify-center items-center">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {map && <Marker position={markerPosition} />}
          </GoogleMap>
        </div>
      )}

      {/* Searchbar section */}
      <div className="flex flex-col py-6 px-4">
        <div className="mb-4">
          <SearchBar onChangeSearch={handleOnSearch} />
        </div>

        <div className="mb-3">
          <ChipTypes
            handleClickChip={setTypeFilter}
            selectedChip={typeFilter}
          />
        </div>

        {filteredFaskes.map((faskes, idx) => (
          <CardFaskesLocation
            key={`faskes-${idx}`}
            typeFaskes={faskes.type}
            nameFaskes={faskes.name}
            onLocationClick={() => handleChangeMap(faskes.lat, faskes.lang)}
            onCardClick={() => handleClickCard(faskes.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaskesPage;
