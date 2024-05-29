import { useNavigate } from "react-router-dom";
import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  date: string;
}

const CardMonitoring = ({ date }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/monitoring/details", {
      state: {
        date: date,
      },
    });
  };

  return (
    <div
      className="flex border-b-2 pb-2 pt-2 items-center justify-between pl-2"
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm text-lightGrey">{date}</p>
      </div>

      <img src={arrowRight} alt="" width={30} height={30} />
    </div>
  );
};

export default CardMonitoring;
