import { useNavigate } from "react-router-dom";
import { KonsumsiMakanan } from "../../constants";

interface Props {
  type: string;
  name: string;
  makanan: KonsumsiMakanan;
}

const CardMakanan = ({ name, type, makanan }: Props) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/monitoring/edit-data-makanan", {
      state: {
        makanan: makanan,
      },
    });
  };

  return (
    <div className="flex flex-col ml-2 mt-3" onClick={handleClickCard}>
      <p className="text-sm text-lightGrey">{type}</p>
      <p className="text-md text-mainGrey mt-1">{name}</p>
      <div className="bg-slate-200 mt-3" style={{ height: "2px" }} />
    </div>
  );
};

export default CardMakanan;
