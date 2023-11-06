import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  setTotalGejala: Dispatch<SetStateAction<number>>;
  setListGejala: Dispatch<SetStateAction<string[]>>;
}

const FormGejala = ({ setTotalGejala, setListGejala }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  useEffect(() => {
    setTotalGejala(selectedOptions.length);
    setListGejala(selectedOptions);
  }, [selectedOptions, setListGejala, setTotalGejala]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda merasakan gejala-gejala berikut dalam 14 hari terakhir?
      </p>

      <div className="flex gap-20">
        <div className="flex-col">
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="Demam"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Demam</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="Batuk/Pilek"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Batuk/Pilek</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="Sesak nafas"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Sesak nafas</p>
          </label>
          <label className="flex items-center p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="Sakit tenggorokan"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Sakit tenggorokan</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormGejala;
