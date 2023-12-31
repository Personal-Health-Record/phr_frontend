import { useNavigate } from "react-router-dom";
import { setUserPhysique } from "../../../helpers/dataTrackerHelper";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import { useState } from "react";

const InsertDataHeightWeight = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = () => {
    setUserPhysique({
      height: parseInt(height),
      weight: parseInt(weight),
      latestUpdate: new Date().toString(),
    });

    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Berat dan Tinggi Badan
        </h3>
        <TextInput
          label="Berat Badan (kg)"
          onChange={(e) => {
            setWeight(e);
          }}
          type="number"
        />

        <TextInput
          label="Tinggi Badan (cm)"
          onChange={(e) => {
            setHeight(e);
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

export default InsertDataHeightWeight;
