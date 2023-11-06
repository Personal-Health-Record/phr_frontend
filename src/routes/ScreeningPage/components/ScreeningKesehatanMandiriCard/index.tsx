import { useNavigate } from "react-router-dom";
import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  dataCard: {
    title: string;
    image: string;
    path: string;
  };
}

const ScreeningKesehatanMandiriCard = ({ dataCard }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(dataCard?.path);
  };

  return (
    <div className="flex items-center gap-3" onClick={handleOnClick}>
      <div>
        <img src={dataCard.image} alt="" width={50} height={50} />
      </div>

      <div className="flex items-center justify-between text-start w-full border-b-2">
        <p className="text-xs py-5">{dataCard.title}</p>
        <img src={arrowRight} alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default ScreeningKesehatanMandiriCard;
