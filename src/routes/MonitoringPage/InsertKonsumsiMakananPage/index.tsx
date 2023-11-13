import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import { useState } from "react";
import TextInput from "../../../components/TextInput";
import { KonsumsiMakanan } from "../MonitoringMakananPage/constants";
import { addKonsumsiMakanan } from "../../../helpers/konsumsiMakananHelper";
import { useGetKonsumsiMakanan } from "../../../helpers/konsumsiMakananHelper";

const InsertKonsumsiMakananPage = () => {
  const navigate = useNavigate();
  const { konsumsiMakanan } = useGetKonsumsiMakanan();
  const [isShowDropdownWaktu, setIsShowDropdownWaktu] = useState(false);
  const [isShowDropdownCategory, setIsShowDropdownCategory] = useState(false);
  const [waktu, setWaktu] = useState("");
  const [kategori, setKategori] = useState("");
  const [name, setName] = useState("");

  const handleClickWaktu = (value: string) => {
    console.log("handleclickwaktu");
    setWaktu(value);
  };

  const handleClickKategori = (value: string) => {
    setKategori(value);
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleSubmit = () => {
    const newKonsumsiMakanan: KonsumsiMakanan = {
      category: kategori,
      name: name,
      type: waktu,
    };

    addKonsumsiMakanan(newKonsumsiMakanan, konsumsiMakanan || []);
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Tambah Makanan
        </h3>
        <Dropdown
          isOpen={isShowDropdownWaktu}
          listItem={["Sarapan", "Makan Siang", "Makan Malam"]}
          setIsOpen={setIsShowDropdownWaktu}
          title={waktu === "" ? "Waktu Makan" : waktu}
          onClickItem={handleClickWaktu}
        />

        <Dropdown
          isOpen={isShowDropdownCategory}
          listItem={["Makanan Pokok", "Lauk Pauk", "Sayuran", "Buah"]}
          setIsOpen={setIsShowDropdownCategory}
          title={kategori === "" ? "Kategori" : kategori}
          onClickItem={handleClickKategori}
        />

        <div className="ml-2">
          <TextInput
            label="Nama Makanan"
            onChange={handleChangeName}
            type="text"
          />
        </div>

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3 px-10 mx-3 mt-3"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default InsertKonsumsiMakananPage;
