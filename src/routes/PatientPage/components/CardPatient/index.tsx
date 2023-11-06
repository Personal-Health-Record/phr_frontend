import { useNavigate } from "react-router-dom";
import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  profilePicture: string;
  name: string;
  id: string;
}

const CardPatient = ({ name, profilePicture, id }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/patient/details/" + id);
  };

  return (
    <div className="flex gap-3" onClick={handleOnClick}>
      <div>
        <img src={profilePicture} alt="menu" width={50} height={50} />
      </div>
      <div className="flex justify-between items-center w-full border-b-2 pb-3">
        <p className="text-xs">{name}</p>
        <div>
          <img src={arrowRight} alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default CardPatient;
