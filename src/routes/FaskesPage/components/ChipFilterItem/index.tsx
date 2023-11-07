interface Props {
  text: string;
  bgColor: string;
}

const ChipFilterItem = ({ text, bgColor }: Props) => {
  return (
    <p
      className={`flex ${bgColor} rounded-2xl px-4 text-sm py-1 mb-1 w-28 justify-center`}
    >
      {text}
    </p>
  );
};

export default ChipFilterItem;
