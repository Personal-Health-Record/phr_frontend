import { Dispatch, SetStateAction } from 'react';

interface Props {
  setLocal: Dispatch<SetStateAction<boolean>>;
}

const FormLokal = ({ setLocal }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda memiliki riwayat perjalanan ke area penularan lokal di
        Indonesia dalam 14 hari terakhir?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center" onClick={() => setLocal(true)}>
          <input
            type="radio"
            name="radioOption-local"
            value="A"
            className="mr-4"
          />
          <p className="text-sm">Ya</p>
        </label>
        <label className="flex items-center" onClick={() => setLocal(false)}>
          <input
            type="radio"
            name="radioOption-local"
            value="B"
            className="mr-4"
          />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormLokal;
