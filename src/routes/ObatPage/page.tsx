import { useState } from "react";
import CircleLoader from "../../components/CircleLoader";
import Header from "../../components/Header";
import { getTodayFormatted } from "../../helpers/dateHelper";
import { getFilteredPengingatObatData, useGetObatData } from "../../helpers/obatDataHelper";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import ButtonTambah from "./components/ButtonTambah";
import ChipDate from "./components/ChipDate";
import ListPengingat from "./components/ListPengingat";
import { Obat } from "./constants";

const PengingatObatPage = () => {
  const { loggedInUser } = useGetLoggedInUser();
  const { obatData } = useGetObatData();
  const [obatList, setObatList] = useState<Obat[]>();

  if (!loggedInUser || !obatData) {
    return <CircleLoader />;
  }

  if (!obatList) {
    setObatList(getFilteredPengingatObatData(obatData, loggedInUser.id));
  }

  return (
    <div className="flex flex-col">
      <Header title="Pengingat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        {
          obatList?.length !== 0 && (
            <>
              <ChipDate date={getTodayFormatted()} />
              <ListPengingat />
            </>
          )
        }
        <ButtonTambah />
      </div>
    </div>
  );
};

export default PengingatObatPage;
