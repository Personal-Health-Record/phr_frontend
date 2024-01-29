import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import ChipTypes from "./components/ChipTypes";
import { useNavigate } from "react-router-dom";
import { useGetAktifitasFisik } from "../../../helpers/aktifitasFisikHelper";
import CardAktifitas from "./components/CardAktifitas";

const MonitoringAktifitasPage = () => {
  const navigate = useNavigate();
  const { aktifitasFisik } = useGetAktifitasFisik();
  const [typeFilter, setTypeFilter] = useState("");
  const [finalDataAktifitas, setFinalDataAktifitas] = useState(aktifitasFisik);

  useEffect(() => {
    if (typeFilter === "" || typeFilter === "Semua") {
      setFinalDataAktifitas(aktifitasFisik);
      return;
    }

    const filteredData = aktifitasFisik?.filter(
      (aktifitas) => aktifitas.type === typeFilter
    );

    setFinalDataAktifitas(filteredData);
  }, [aktifitasFisik, typeFilter]);

  const handleAddAktifitas = () => {
    navigate("/monitoring/insert-data-fisik");
  };

  const totalDuration = aktifitasFisik?.reduce((acc, current) => {
    return acc + current.duration;
  }, 0);

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 pt-4 gap-2">
        <ChipTypes handleClickChip={setTypeFilter} selectedChip={typeFilter} />

        <div className="flex flex-col p-5 shadow-md rounded-xl">
          <p className="text-sm text-mainGrey font-bold mb-1">Total Durasi</p>
          <p className="text-sm text-mainGrey">{totalDuration} menit</p>
        </div>

        <h3 className="font-semibold text-mainGrey pl-2 mt-3">
          Aktivitas Fisik
        </h3>

        <div>
          {finalDataAktifitas?.map((aktifitas, idx) => (
            <CardAktifitas
              name={aktifitas.type}
              duration={aktifitas.duration}
              key={`aktifitas-${idx}`}
              aktifitas={aktifitas}
            />
          ))}
        </div>

        <button
          className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue mt-5"
          onClick={handleAddAktifitas}
        >
          + Tambahkan Aktivitas Fisik
        </button>
      </div>
    </div>
  );
};

export default MonitoringAktifitasPage;
