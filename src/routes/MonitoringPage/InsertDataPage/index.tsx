import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserPhysique } from "../../../helpers/dataTrackerHelper";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";

const InsertDataHeightWeight = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    console.log({ height, weight });
  }, [height, weight]);

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
          placeholder="80"
          type="number"
        />

        <TextInput
          label="Tinggi Badan (cm)"
          onChange={(e) => {
            setHeight(e);
          }}
          placeholder="170"
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
