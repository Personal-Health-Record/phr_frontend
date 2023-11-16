"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import CircleLoader from "../../../../components/CircleLoader";

interface Props {
  lat: number;
  lng: number;
}
const containerStyle = {
  width: "100%",
  height: "300px",
};

const MapsDetail = ({ lat, lng }: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDITiNAxw43DqK1QeYXeaoTfFFJS8C8Rkk",
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (window.google) {
        const bounds = new window.google.maps.LatLngBounds({
          lat: lat,
          lng: lng,
        });
        map.fitBounds(bounds);

        setMap(map);
      }
    },
    [lat, lng]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return (
    <div className="flex flex-col">
      {!isLoaded ? (
        <div className="flex justify-center items-center mt-10">
          <CircleLoader />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-3 justify-center items-center">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
              lat: lat,
              lng: lng,
            }}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {map && (
              <Marker
                position={{
                  lat: lat,
                  lng: lng,
                }}
              />
            )}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default MapsDetail;
