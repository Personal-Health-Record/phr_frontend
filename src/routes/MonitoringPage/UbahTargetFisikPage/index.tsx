import { useState } from "react";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import { changeAktifitasFisikTarget } from "../../../helpers/aktifitasFisikHelper";
import { useNavigate } from "react-router-dom";

const UbahTargetFisikpage = () => {
  const navigate = useNavigate();
  const [durasi, setDurasi] = useState<number>();

  const handleSubmit = () => {
    changeAktifitasFisikTarget(durasi || 0);
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb">Ubah Target</h3>
        <TextInput
          label="Durasi (menit)"
          onChange={(value: number) => setDurasi(value)}
          placeholder="30"
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
  );
};

export default UbahTargetFisikpage;
