import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  id: number;
}
const CardTempatPraktik = ({ name, id }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/faskes/details?id=${id}`);
  };

  return (
    <div className="flex gap-1 border-b-2 py-3 justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm">Tempat Praktik</p>
        <p className="text-sm text-mainGrey">{name}</p>
      </div>

      <button
        className="text-xs bg-superLightGrey px-2 rounded-2xl font-semibold py-0"
        onClick={handleOnClick}
      >
        Lihat Profil Faskes
      </button>
    </div>
  );
};

export default CardTempatPraktik;
