import { useState } from "react";
import { useGetSkriningKesehatanList } from "../../../helpers/skriningKesehatanHelper";
import { Skrining } from "../constants";
import Header from "../../HomePage/components/Header";
import SearchBar from "../../../components/Searchbar";
import RiwayatScreeningCard from "../components/RiwayatScreeningCard";

const ScreeningDoctor = () => {
  const [screeningData, setScreeningData] = useState<Skrining[]>();
  const { listSkrining } = useGetSkriningKesehatanList();
  if (!listSkrining) {
    return <div> Loading... </div>;
  }

  if (!screeningData) {
    setScreeningData(listSkrining);
  }

  const handleSearch = (keyword: string) => {
    const newScreeningData = listSkrining!.filter((screening) =>
      screening.location.toLowerCase().includes(keyword.toLowerCase())
    );
    setScreeningData(newScreeningData);
  };

  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan" />
      <SearchBar
        onSearch={handleSearch}
        placeHolder="Cari Skrining Kesehatan"
      />

      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <div className="flex flex-col gap-4">
          {screeningData?.map((skrining, idx) => (
            <RiwayatScreeningCard
              date={skrining.date}
              location={skrining.location}
              type={skrining.skriningType}
              key={`skrining-${idx}`}
              id={skrining.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreeningDoctor;
