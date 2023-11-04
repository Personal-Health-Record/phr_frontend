import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Obat, Pengingat as PengingatType } from "../../../ObatPage/constants";
import { useGetObatData } from "../../../../helpers/obatDataHelper";
import pengingatImg from "../../../../assets/images/pengingat-icon.png";

const Pengingat = () => {
  const navigate = useNavigate();
  const { obatData } = useGetObatData();
  const [selectedObat, setSelectedObat] = useState<Obat>();
  const [selectedPengingat, setSelectedPengingat] = useState<PengingatType>();

  const handleRedirectObat = () => {
    navigate("/obat");
  };

  useEffect(() => {
    obatData?.forEach((obat) => {
      obat.listPengingat.forEach((pengingat) => {
        if (pengingat.consumptionStatus === "Belum dikonsumsi") {
          const dateFrom = new Date(obat.dateFrom);
          const dateTo = new Date(obat.dateTo);
          const today = new Date();

          if (today >= dateFrom && today <= dateTo) {
            setSelectedObat(obat);
            setSelectedPengingat(pengingat);
          }
        }
      });
    });
  }, [obatData]);

  if (selectedObat === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col px-4 py-4 gap-2">
      <h3>Pengingat</h3>

      <div
        className="flex shadow-md rounded-md px-3 py-4 gap-3 items-center justify-between"
        onClick={handleRedirectObat}
      >
        <div>
          <img src={pengingatImg} alt="" width={45} height={45} />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <p className="text-sm">{selectedObat.name}</p>
          <p className="text-xs text-mainGrey whitespace-nowrap">
            {selectedObat.consumptionPerDay} {selectedObat.type}{" "}
            {selectedObat.consumptionTime}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-xl font-bold text-mainGrey">
            {selectedPengingat?.time}
          </p>
          <button className="text-xs bg-mainBlue px-4 py-2 rounded-3xl text-white font-bold">
            Konsumsi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengingat;
