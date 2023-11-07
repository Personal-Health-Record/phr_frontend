import { BMIForm } from "../../BMIPage";

type CardHasilBmiProps = {
  bmiResult: number;
  formState: BMIForm;
};

const CardHasilBmi = ({ bmiResult, formState }: CardHasilBmiProps) => {
  const getResultType = () => {
    if (bmiResult < 18.5) {
      return "Kurus (Underweight)";
    }
    if (bmiResult < 24.9) {
      return "Normal (Normal Weight)";
    }
    if (bmiResult < 29.9) {
      return "Kelebihan Berat Badan (Overweight)";
    }
    return "Obesitas";
  };

  const getIdealWeight = () => {
    const height = formState.height! / 100;

    const idealWeightFrom = 18.5 * height * height;
    const idealWeightTo = 24.9 * height * height;

    // only allow 1 decimal places
    return `${idealWeightFrom.toFixed(1)} - ${idealWeightTo.toFixed(1)} kg`;
  };

  return (
    <div className="flex flex-col shadow-lg py-3 px-5 rounded-xl">
      <div className="flex justify-evenly border-b-2 py-5 items-center">
        <p className="text-xl font-semibold text-mainGrey">{bmiResult}</p>
        <p className="text-sm bg-superLightGrey px-5 py-1 rounded-2xl">
          {getResultType()}
        </p>
      </div>
      <div className="flex justify-center py-5">
        <p className="text-xs text-mainGrey">
          Berat ideal Anda adalah {getIdealWeight()}
        </p>
      </div>
    </div>
  );
};

export default CardHasilBmi;
