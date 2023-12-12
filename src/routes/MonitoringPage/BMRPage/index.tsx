import { useState } from "react";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import Header from "../../../components/Header";
import FormKalori from "../components/FormKalori";
import CardHasilBmr from "../components/CardHasilBmr";
import CircleLoader from "../../../components/CircleLoader";
import { useToaster } from "../../../contexts/ToasterContext";

export type BMRForm = {
  gender: string;
  age: number;
  weight: number;
  height: number;
  exerciseIntensity: string;
};

const KalkulatorKalori = () => {
  const [bmrResult, setBmrResult] = useState(0);
  const [formState, setFormState] = useState<BMRForm>({
    gender: "",
    age: 0,
    weight: 0,
    height: 0,
    exerciseIntensity: "",
  });
  const { loggedInUser: user } = useGetLoggedInUser();
  const { toggleDiv } = useToaster();

  if (!user) {
    return <CircleLoader />;
  }
  if (formState.age === 0) {
    setFormState({
      ...formState,
      gender: user.gender,
      age: user.age,
    });
  }

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (typeof value === "number" && value === 0) {
        toggleDiv("error", `Data ${key} harus diisi semua`);

        return false;
      }

      if (!value) {
        toggleDiv("error", "Data harus diisi semua");
        return false;
      }
    }

    return true;
  };

  const handleCalculate = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    let result;
    if (formState.gender === "laki-laki") {
      result =
        88.362 +
        13.397 * formState.weight +
        4.799 * formState.height -
        5.677 * formState.age;
    } else {
      result =
        447.593 +
        9.247 * formState.weight +
        3.098 * formState.height -
        4.33 * formState.age;
    }
    setBmrResult(Math.round(result * 10) / 10);
  };
  // TODO: adjust form
  // adjust card hasil
  // cari tau type2nya bmr dari result
  return (
    <div className="flex flex-col">
      <Header title="Kalkulator Kalori (BMR)" />

      <div className="flex flex-col w-full px-4 py-4">
        <h3 className="font-semibold text-mainGrey pl-2">
          Kalkulator Kalori (BMR)
        </h3>

        <FormKalori
          setFormState={setFormState}
          formState={formState}
          handleCalculate={handleCalculate}
        />

        {bmrResult > 0 && (
          <div>
            <h3 className="font-semibold text-mainGrey pl-2 mb-3">Hasil</h3>
            <CardHasilBmr bmrResult={bmrResult} formState={formState} />
          </div>
        )}
      </div>
    </div>
  );
};

export default KalkulatorKalori;
