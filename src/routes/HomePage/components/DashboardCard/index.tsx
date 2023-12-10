import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  value: string;
  unit: string;
  path: string;
}

const DashboardCard = ({ title, unit, value, path }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(path);
  };
  return (
    <div
      className="flex flex-col shadow-md rounded-md py-3 px-1 items-center gap-1 w-28"
      onClick={handleOnClick}
    >
      <p className="text-mainBlue text-xs">{title}</p>
      <p className="text-xl font-bold text-mainGrey">{value}</p>
      <p className="text-xs text-lightGrey">{unit}</p>
    </div>
  );
};

export default DashboardCard;
