import { Dispatch, SetStateAction } from 'react';

interface Props {
  setKontak: Dispatch<SetStateAction<boolean>>;
}

const FormKontak = ({ setKontak }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda memiliki riwayat kontak erat dengan penderita terkonfirmasi
        COVID-19 dalam 14 hari terakhir?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center" onClick={() => setKontak(true)}>
          <input
            type="radio"
            name="radioOption-kontak"
            value="A"
            className="mr-4"
          />
          <p className="text-sm">Ya</p>
        </label>
        <label className="flex items-center" onClick={() => setKontak(false)}>
          <input
            type="radio"
            name="radioOption-kontak"
            value="B"
            className="mr-4"
          />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormKontak;
