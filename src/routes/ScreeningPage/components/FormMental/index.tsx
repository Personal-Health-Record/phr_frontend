import { Dispatch, SetStateAction } from 'react';

interface Props {
  title: string;
  listScore: number[];
  setScore: Dispatch<SetStateAction<number[]>>;
  idx: number;
}

const FormMental = ({ title, setScore, listScore, idx }: Props) => {
  const handleOnChange = (value: number) => {
    const updatedArray = [...listScore];
    updatedArray[idx] = value;

    setScore(updatedArray);
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">{title}</p>

      <div className="flex gap-20">
        <div className="flex-col">
          <label
            className="flex items-center mb-2 p-2"
            onClick={() => handleOnChange(1)}
          >
            <input
              type="radio"
              name={`radioOption-${idx}`}
              value="A"
              className="mr-2"
            />
            <p className="text-sm">Tidak Pernah</p>
          </label>
          <label
            className="flex items-center mb-2 p-2"
            onClick={() => handleOnChange(2)}
          >
            <input
              type="radio"
              name={`radioOption-${idx}`}
              value="B"
              className="mr-2"
            />
            <p className="text-sm">Beberapa hari</p>
          </label>
          <label
            className="flex items-center mb-2 p-2"
            onClick={() => handleOnChange(3)}
          >
            <input
              type="radio"
              name={`radioOption-${idx}`}
              value="C"
              className="mr-2"
            />
            <p className="text-sm">Lebih dari separuh waktu yang dimaksud</p>
          </label>
          <label
            className="flex items-center p-2"
            onClick={() => handleOnChange(4)}
          >
            <input
              type="radio"
              name={`radioOption-${idx}`}
              value="D"
              className="mr-2"
            />
            <p className="text-sm">Hampir setiap hari</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormMental;
