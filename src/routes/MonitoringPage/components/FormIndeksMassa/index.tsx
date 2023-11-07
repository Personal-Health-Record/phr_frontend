import RadioInput from "../../../../components/RadioInput";
import TextInput from "../../../../components/TextInput";
import { BMIForm } from "../../BMIPage";

type FormIndeksMassaProps = {
  setFormState: any;
  formState: BMIForm;
  handleCalculate: () => void;
};

const FormIndeksMassa = ({
  setFormState,
  formState,
  handleCalculate,
}: FormIndeksMassaProps) => {
  return (
    <div className="flex flex-col gap-6">
      <RadioInput
        label="Jenis Kelamin"
        options={[
          { label: "Laki-laki", value: "laki-laki" },
          { label: "Perempuan", value: "perempuan" },
        ]}
        onClick={(value: any) => setFormState({ ...formState, gender: value })}
        inputKey="gender"
        value={formState.gender}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
        value={formState.age}
      />
      <TextInput
        label="Berat Badan (Kg)"
        placeholder="Berat Badan"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, weight: value })}
        value={formState.weight}
      />
      <TextInput
        label="Tinggi Badan (cm)"
        placeholder="Tinggi Badan (cm)"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, height: value })}
        value={formState.height}
      />

      <button
        className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6"
        onClick={handleCalculate}
      >
        Hitung
      </button>
    </div>
  );
};

export default FormIndeksMassa;
