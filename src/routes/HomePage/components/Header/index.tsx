import { useNavigate } from "react-router-dom";
import backImg from "../../../../assets/images/back.png";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="flex items-center gap-3 px-3 py-3 border-b-2 w-full"
      onClick={handleBack}
    >
      <img src={backImg} alt="" width={30} height={30} />
      <h3 className="font-bold text-xl text-mainGrey">{title}</h3>
    </div>
  );
};

export default Header;
