import appIcon from "../../../../assets/images/app-icon.png";

type IconPHRProps = {
  className?: string;
};

const IconPHR = ({ className }: IconPHRProps) => {
  return (
    <div className={"flex flex-col items-center gap-2 " + className}>
      <img src={appIcon} alt="" width={80} height={80} />
      <h3 className="font-bold text-4xl text-gray-600">PHR</h3>
    </div>
  );
};

export default IconPHR;
