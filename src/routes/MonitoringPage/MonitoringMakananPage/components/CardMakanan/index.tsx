interface Props {
  type: string;
  name: string;
}

const CardMakanan = ({ name, type }: Props) => {
  return (
    <div className="flex flex-col ml-2 mt-3">
      <p className="text-sm text-lightGrey">{type}</p>
      <p className="text-md text-mainGrey mt-1">{name}</p>
      <div className="bg-slate-200 mt-3" style={{ height: "2px" }} />
    </div>
  );
};

export default CardMakanan;
