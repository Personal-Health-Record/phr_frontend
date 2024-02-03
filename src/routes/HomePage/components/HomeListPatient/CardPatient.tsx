import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  profileIcon: string;
  idPatient: number;
}

const CardPatient = ({ name, profileIcon, idPatient }: Props) => {
  const navigate = useNavigate();

  const handleClickPatient = () => {
    navigate(`/patient/details/${idPatient}`);
  };
  return (
    <div
      className="flex flex-col justify-center items-center w-24 h-24 shadow-md rounded-lg gap-3"
      onClick={handleClickPatient}
    >
      <img src={profileIcon} alt="patient" width={40} height={40} />
      <p className="text-xs text-mainGrey">{name}</p>
    </div>
  );
};

export default CardPatient;
