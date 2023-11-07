import RadioInput from "../../../../components/RadioInput";
import TextInput from "../../../../components/TextInput";
import { BMRForm } from "../../BMRPage";

type FormKaloriProps = {
  setFormState: any;
  formState: BMRForm;
  handleCalculate: () => void;
};

const FormKalori = ({
  setFormState,
  formState,
  handleCalculate,
}: FormKaloriProps) => {
  const exerciseIntensityOptions = [
    "Sedikit atau tanpa olahraga",
    "Olahraga ringan 1-3 kali per minggu",
    "Olahraga sedang 3-5 kali per minggu",
    "Olahraga berat 6-7 kali per minggu",
    "Olahraga berat setiap hari atau aktivitas fisik berat dan pekerjaan fisik",
  ];

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
      <RadioInput
        label="Tingkat intensitas aktivitas fisik"
        options={exerciseIntensityOptions.map((option) => ({
          label: option,
          value: option,
        }))}
        onClick={(value: any) =>
          setFormState({ ...formState, exerciseIntensity: value })
        }
        inputKey="exerciseIntensity"
        value={formState.exerciseIntensity}
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

export default FormKalori;
