interface Props {
  date: string;
}

const ChipDate = ({ date }: Props) => {
  return (
    <p className="px-5 py-1 bg-superLightGrey w-fit rounded-2xl text-sm">
      {date}
    </p>
  );
};

export default ChipDate;
