import { useNavigate } from "react-router-dom";
import { AktifitasFisik } from "../../constants";

interface Props {
  name: string;
  duration: number;
  aktifitas?: AktifitasFisik;
}

const CardAktifitas = ({ name, duration, aktifitas }: Props) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/monitoring/edit-data-fisik", {
      state: {
        aktifitas: aktifitas,
      },
    });
  };

  return (
    <div className="flex flex-col ml-2 mt-3" onClick={handleClickCard}>
      <p className="text-sm text-lightGrey">{name}</p>
      <p className="text-md text-mainGrey mt-1">{duration} menit</p>
      <div className="bg-slate-200 mt-3" style={{ height: "2px" }} />
    </div>
  );
};

export default CardAktifitas;
