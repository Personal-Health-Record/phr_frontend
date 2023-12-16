import { useState } from "react";
import { useGetObatData, useGetRiwayatAlergiData } from "../../../helpers/obatDataHelper";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import { Obat } from "../constants";
import Header from "../../../components/Header";
import SearchBar from "../components/SearchBar";
import CardRiwayat from "../components/CardRiwayat";
import CardObat from "../components/CardObat";
import CircleLoader from "../../../components/CircleLoader";
import { useNavigate } from "react-router-dom";

const RiwayatObat = () => {
  const { loggedInUser } = useGetLoggedInUser();
  const { obatData } = useGetObatData();
  const navigate = useNavigate();
  const [obatList, setObatList] = useState<Obat[]>();
  const { riwayatAlergiData } = useGetRiwayatAlergiData();

  if (!loggedInUser || !obatData || !riwayatAlergiData) {
    return <CircleLoader />;
  }

  const getUserRiwayatAlergi = () => {
    return riwayatAlergiData.filter((riwayatAlergi) => {
      return riwayatAlergi.userId === loggedInUser.id;
    });
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

  const renderButtonAddRiwayat = () => {
    return (
      <button
        className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue"
        onClick={() => {
          navigate("/obat/riwayat/tambah");
        }}
      >
        + Tambahkan Riwayat Alergi
      </button>
    );
  }

  return (
    <div className="flex flex-col">
      <Header title="Riwayat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <SearchBar onSearch={onSearch} />

        {
          getUserRiwayatAlergi().length === 0 ?
            renderButtonAddRiwayat() :
            (
              <CardRiwayat data={getUserRiwayatAlergi()[0]} />
            )
        }

        {obatList && obatList.length !== 0 ? (
          obatList.map((obat, index) => {
            return <CardObat obat={obat} key={index} />;
          }))
          : (
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-mainGrey text-center">
                Kamu belum memiliki riwayat obat
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default RiwayatObat;
