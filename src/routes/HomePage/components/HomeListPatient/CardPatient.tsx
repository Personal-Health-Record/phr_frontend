interface Props {
  name: string;
  profileIcon: string;
}

const CardPatient = ({ name, profileIcon }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-24 h-24 shadow-md rounded-lg gap-3">
      <img src={profileIcon} alt="patient" width={40} height={40} />
      <p className="text-xs text-mainGrey">{name}</p>
    </div>
  );
};

export default CardPatient;
