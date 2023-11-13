interface Props {
  name: string;
  duration: number;
}

const CardAktifitas = ({ name, duration }: Props) => {
  return (
    <div className="flex flex-col ml-2 mt-3">
      <p className="text-sm text-lightGrey">{name}</p>
      <p className="text-md text-mainGrey mt-1">{duration} menit</p>
      <div className="bg-slate-200 mt-3" style={{ height: "2px" }} />
    </div>
  );
};

export default CardAktifitas;
