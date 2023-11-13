import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import ChipTypes from "./components/ChipTypes";
import CardMakanan from "./components/CardMakanan";
import { useGetKonsumsiMakanan } from "../../../helpers/konsumsiMakananHelper";

const MonitoringMakananPage = () => {
  const { konsumsiMakanan } = useGetKonsumsiMakanan();
  const [typeFilter, setTypeFilter] = useState("");
  const [finalDataMakanan, setFinalDataMakanan] = useState(konsumsiMakanan);

  useEffect(() => {
    if (typeFilter === "" || typeFilter === "Semua") {
      setFinalDataMakanan(konsumsiMakanan);
      return;
    }

    const filteredData = konsumsiMakanan?.filter(
      (makanan) => makanan.type === typeFilter
    );

    setFinalDataMakanan(filteredData);
  }, [konsumsiMakanan, typeFilter]);

  return (
    <div className="flex flex-col">
      <Header title="Traking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 pt-4 gap-2">
        <ChipTypes handleClickChip={setTypeFilter} selectedChip={typeFilter} />
        <h3 className="font-semibold text-mainGrey pl-2 mt-3">
          Konsumsi Makanan
        </h3>

        <div>
          {finalDataMakanan?.map((makanan, idx) => (
            <CardMakanan
              name={makanan.name}
              type={makanan.category}
              key={`makanan-${idx}`}
            />
          ))}
        </div>

        <button className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue mt-5">
          + Tambahkan Makanan
        </button>
      </div>
    </div>
  );
};

export default MonitoringMakananPage;
