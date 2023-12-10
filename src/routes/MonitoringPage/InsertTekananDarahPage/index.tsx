import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import { setTekananDarah } from "../../../helpers/tekananDarahHelpers";

const InsertDataTekananDarahPage = () => {
  const navigate = useNavigate();
  const [systole, setSystole] = useState(0);
  const [diastole, setDiastole] = useState(0);

  const handleSubmit = () => {
    setTekananDarah({
      diastole: diastole,
      systole: systole,
    });

    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">Tekanan Darah</h3>
        <TextInput
          label="Tekanan Darah Systole (mmHg)"
          onChange={(e) => {
            setSystole(e);
          }}
          type="number"
        />

        <TextInput
          label="Tekanan Darah Diastole (mmHg)"
          onChange={(e) => {
            setDiastole(e);
          }}
          type="number"
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

export default InsertDataTekananDarahPage;
