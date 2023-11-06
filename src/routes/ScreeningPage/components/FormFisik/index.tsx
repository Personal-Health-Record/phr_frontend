import { Dispatch, SetStateAction } from 'react';

interface Props {
  setFisik: Dispatch<SetStateAction<boolean>>;
}

const FormFisik = ({ setFisik }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda melakukan aktivitas fisik secara rutin (minimal 30 menit per
        hari)?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center" onClick={() => setFisik(true)}>
          <input
            type="radio"
            name="radioOption-fisik"
            value="A"
            className="mr-4"
          />
          <p className="text-sm">Ya</p>
        </label>
        <label className="flex items-center" onClick={() => setFisik(false)}>
          <input
            type="radio"
            name="radioOption-fisik"
            value="B"
            className="mr-4"
          />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormFisik;
