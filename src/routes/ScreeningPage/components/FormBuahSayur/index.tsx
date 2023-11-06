import { Dispatch, SetStateAction } from 'react';

interface Props {
  setBuahSayur: Dispatch<SetStateAction<boolean>>;
}

const FormBuahSayur = ({ setBuahSayur }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda mengkonsumsi buah dan sayur setiap hari?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center" onClick={() => setBuahSayur(true)}>
          <input
            type="radio"
            name="radioOption-buahsayur"
            value="A"
            className="mr-4"
          />
          <p className="text-sm">Ya</p>
        </label>
        <label
          className="flex items-center"
          onClick={() => setBuahSayur(false)}
        >
          <input
            type="radio"
            name="radioOption-buahsayur"
            value="B"
            className="mr-4"
          />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormBuahSayur;
