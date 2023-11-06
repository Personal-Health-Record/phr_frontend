import { Dispatch, SetStateAction } from 'react';

interface Props {
  setRokok: Dispatch<SetStateAction<boolean>>;
}

const FormRokok = ({ setRokok }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda memiliki riwayat merokok?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center" onClick={() => setRokok(true)}>
          <input
            type="radio"
            name="radioOption-rokok"
            value="A"
            className="mr-4"
          />
          <p className="text-sm">Ya</p>
        </label>
        <label className="flex items-center" onClick={() => setRokok(false)}>
          <input
            type="radio"
            name="radioOption-rokok"
            value="B"
            className="mr-4"
          />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormRokok;
