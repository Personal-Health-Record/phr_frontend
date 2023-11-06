import { Dispatch, SetStateAction } from 'react';
import TextInputPTM from '../TextInput';

interface Props {
  setGula: Dispatch<SetStateAction<number>>;
  setSystole: Dispatch<SetStateAction<number>>;
  setDiastole: Dispatch<SetStateAction<number>>;
  setBerat: Dispatch<SetStateAction<number>>;
  setTinggi: Dispatch<SetStateAction<number>>;
  setLingkar: Dispatch<SetStateAction<number>>;
}

const FormHasilPemeriksaan = ({
  setBerat,
  setDiastole,
  setGula,
  setLingkar,
  setSystole,
  setTinggi,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-mainGrey text-sm mb-1">
        Hasil Pemeriksaan
      </h3>

      <TextInputPTM
        label="Tekanan Darah Systole (mmHg)"
        onChange={setSystole}
        type="number"
      />
      <TextInputPTM
        label="Tekanan Darah Diastole (mmHg)"
        onChange={setDiastole}
        type="number"
      />
      <TextInputPTM
        label="Gula Darah (mg/dL)"
        onChange={setGula}
        type="number"
      />
      <TextInputPTM
        label="Berat Badan (kg)"
        onChange={setBerat}
        type="number"
      />
      <TextInputPTM
        label="Tinggi Badan (cm)"
        onChange={setTinggi}
        type="number"
      />
      <TextInputPTM
        label="Lingkar Perut (cm)"
        onChange={setLingkar}
        type="number"
      />
    </div>
  );
};

export default FormHasilPemeriksaan;
