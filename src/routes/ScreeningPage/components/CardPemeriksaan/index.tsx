interface Props {
  title: string;
  value: string;
}

const CardPemeriksaan = ({ title, value }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm">{title}</p>
          <p className="text-sm text-mainGrey">{value}</p>
        </div>
        <div className="bg-superLightGrey h-fit px-4 py-1 rounded-xl">
          <p className="text-sm">Normal</p>
        </div>
      </div>

      <div className="w-full h-0.5 bg-superLightGrey my-3" />
    </div>
  );
};

export default CardPemeriksaan;
