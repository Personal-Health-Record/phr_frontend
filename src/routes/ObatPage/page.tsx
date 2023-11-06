import Header from "../../components/Header";
import { getTodayFormatted } from "../../helpers/dateHelper";
import ButtonTambah from "./components/ButtonTambah";
import ChipDate from "./components/ChipDate";
import ListPengingat from "./components/ListPengingat";

const PengingatObatPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Pengingat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <ChipDate date={getTodayFormatted()} />
        <ListPengingat />
        <ButtonTambah />
      </div>
    </div>
  );
};

export default PengingatObatPage;
