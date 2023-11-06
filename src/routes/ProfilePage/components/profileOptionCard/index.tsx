import { useNavigate } from "react-router-dom";
import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  title: string;
  path: string;
  onClick?: () => void;
}

const ProfileOptionCard = ({ title, path, onClick }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(path);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex items-center gap-3" onClick={handleOnClick}>
      <div className="flex items-center justify-between text-start w-full border-b">
        <p className="text-xs py-5">{title}</p>
        <img src={arrowRight} alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default ProfileOptionCard;
