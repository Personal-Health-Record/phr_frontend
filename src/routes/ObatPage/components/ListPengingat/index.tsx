import { useState } from "react";
import {
  updateObatData,
  useGetObatData,
} from "../../../../helpers/obatDataHelper";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import { Obat } from "../../constants";
import PengingatCard from "../PengingatCard";
import CircleLoader from "../../../../components/CircleLoader";

const ListPengingat = () => {
  const { loggedInUser } = useGetLoggedInUser();
  const { obatData } = useGetObatData();
  const [obatList, setObatList] = useState<Obat[]>();

  if (!loggedInUser || !obatData) {
    return <CircleLoader />;
  }
  const getFilteredObatData = (listObat: Obat[]) => {
    return listObat.filter((obat) => {
      const isLoggedInUserObat = obat.userId === loggedInUser.id;
      const today = new Date();
      const dateFrom = new Date(obat.dateFrom);
      const dateTo = new Date(obat.dateTo);
      const isDateValid = today >= dateFrom && today <= dateTo;

      return isLoggedInUserObat && isDateValid;
    });
  };

  if (!obatList) {
    setObatList(getFilteredObatData(obatData));
  }

  const handleChangeObatData = (obat: Obat) => {
    const updatedObatList = updateObatData(obat, obatData);
    setObatList(getFilteredObatData(updatedObatList));
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">Pengingat Obat</h3>

      <div className="flex flex-col gap-5">
        {obatList &&
          obatList.map((obat) => {
            return obat.listPengingat.map((pengingat, index) => {
              return (
                <PengingatCard
                  key={obat.id + "-" + index}
                  obat={obat}
                  pengingat={pengingat}
                  handleChangeObatData={handleChangeObatData}
                />
              );
            });
          })}
      </div>
    </div>
  );
};

export default ListPengingat;
