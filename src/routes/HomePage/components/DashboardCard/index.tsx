interface Props {
  title: string;
  value: string;
  unit: string;
}

const DashboardCard = ({ title, unit, value }: Props) => {
  return (
    <div className="flex flex-col shadow-md rounded-md py-3 px-1 items-center gap-1 w-28">
      <p className="text-mainBlue text-xs">{title}</p>
      <p className="text-xl font-bold text-mainGrey">{value}</p>
      <p className="text-xs text-lightGrey">{unit}</p>
    </div>
  );
};

export default DashboardCard;
