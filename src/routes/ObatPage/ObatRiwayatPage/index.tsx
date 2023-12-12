import { useState } from "react";
import { useGetObatData } from "../../../helpers/obatDataHelper";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import { Obat } from "../constants";
import Header from "../../../components/Header";
import SearchBar from "../components/SearchBar";
import CardRiwayat from "../components/CardRiwayat";
import CardObat from "../components/CardObat";
import CircleLoader from "../../../components/CircleLoader";

const RiwayatObat = () => {
  const { loggedInUser } = useGetLoggedInUser();
  const { obatData } = useGetObatData();
  const [obatList, setObatList] = useState<Obat[]>();

  if (!loggedInUser || !obatData) {
    return <CircleLoader />;
  }
  const getFilteredObatData = (listObat: Obat[], keyword: string) => {
    return listObat.filter((obat) => {
      const isLoggedInUserObat = obat.userId === loggedInUser.id;
      const today = new Date();
      const dateTo = new Date(obat.dateTo);
      const isObatNameMatch = obat.name
        .toLowerCase()
        .includes(keyword.toLowerCase());
      return isLoggedInUserObat && today >= dateTo && isObatNameMatch;
    });
  };

  if (!obatList) {
    setObatList(getFilteredObatData(obatData, ""));
  }

  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setObatList(getFilteredObatData(obatData, ""));
    }
    setObatList(getFilteredObatData(obatData, keyword));
  };

  return (
    <div className="flex flex-col">
      <Header title="Riwayat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <SearchBar onSearch={onSearch} />

        <CardRiwayat />

        {obatList &&
          obatList.map((obat, index) => {
            return <CardObat obat={obat} key={index} />;
          })}
      </div>
    </div>
  );
};

export default RiwayatObat;
