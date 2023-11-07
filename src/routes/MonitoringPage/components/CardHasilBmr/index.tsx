import { BMRForm } from "../../BMRPage";

type CardHasilBmrProps = {
  bmrResult: number;
  formState: BMRForm;
};

const CardHasilBmr = ({ bmrResult, formState }: CardHasilBmrProps) => {
  const getResultType = () => {
    if (formState.gender === "laki-laki") {
      if (bmrResult < 1600 || bmrResult > 1800) {
        return "Tidak Normal";
      }
      return "Normal";
    }

    if (bmrResult < 1200 || bmrResult > 1400) {
      return "Tidak Normal";
    }
    return "Normal";
  };

  return (
    <div className="flex flex-col shadow-lg py-3 px-5 rounded-xl">
      <div className="flex justify-evenly border-b-2 py-5 items-center">
        <p className="text-xl font-semibold text-mainGrey">{bmrResult}</p>
        <p className="text-sm bg-superLightGrey px-5 py-1 rounded-2xl">
          {getResultType()}
        </p>
      </div>
      <div className="flex justify-center py-5">
        <p className="text-xs text-mainGrey">
          Rata-rata BMR normal sekitar 1600 – 1800 Kilokalori (Kkal) untuk pria
          dan 1200 – 1400 Kkal untuk wanita.
        </p>
      </div>
    </div>
  );
};

export default CardHasilBmr;
