import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";

const InsertDataFisik = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Aktifitas Fisik
        </h3>
        <TextInput
          label="Jenis Aktifitas Fisik"
          onChange={() => {}}
          placeholder="Jalan Kaki"
          type="text"
        />

        <TextInput
          label="Waktu Mulai"
          onChange={() => {}}
          placeholder="6:00"
          type="text"
        />

        <TextInput
          label="Waktu Selesai"
          onChange={() => {}}
          placeholder="6:30"
          type="text"
        />

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
