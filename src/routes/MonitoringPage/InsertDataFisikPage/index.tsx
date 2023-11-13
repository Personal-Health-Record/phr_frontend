import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import Dropdown from "../../../components/Dropdown";
import { useState } from "react";
import { getTimeDifferenceInMinutes } from "../../../helpers/dateHelper";
import {
  addAktifitasFisik,
  useGetAktifitasFisik,
} from "../../../helpers/aktifitasFisikHelper";

const InsertDataFisik = () => {
  const { aktifitasFisik } = useGetAktifitasFisik();
  const [isShowDropdownKategori, setIsShowDropdownKategori] = useState(false);
  const [kategori, setKategori] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleClickKategori = (value: string) => {
    setKategori(value);
  };

  const handleSubmit = () => {
    setIsError(false);

    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    if (!timeRegex.test(start) || !timeRegex.test(end)) {
      setIsError(true);
      return;
    }

    addAktifitasFisik(
      {
        duration: getTimeDifferenceInMinutes(start, end),
        type: kategori,
      },
      aktifitasFisik || []
    );

    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Aktifitas Fisik
        </h3>
        <Dropdown
          isOpen={isShowDropdownKategori}
          listItem={["Jalan Kaki", "Jogging", "Push up"]}
          setIsOpen={setIsShowDropdownKategori}
          title={kategori === "" ? "Pilih Kategori" : kategori}
          onClickItem={handleClickKategori}
        />

        <TextInput
          label="Waktu Mulai"
          onChange={(value: any) => setStart(value)}
          placeholder="06:30"
          type="text"
        />

        <TextInput
          label="Waktu Selesai"
          onChange={(value) => setEnd(value)}
          placeholder="07:00"
          type="text"
        />

        {isError && (
          <p className="text-xs ml-6 text-red-500">
            Format harus sesuai dengan contoh: 18:00, 06:30
          </p>
        )}

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

export default InsertDataFisik;
