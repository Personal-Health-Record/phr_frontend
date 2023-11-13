interface Props {
  text: string;
  bgColor: string;
}

const ChipFilterItem = ({ text, bgColor }: Props) => {
  return (
    <div
      className={`flex ${bgColor} rounded-2xl px-4 text-sm py-1 mb-1 justify-center whitespace-nowrap`}
    >
      <p>{text}</p>
    </div>
  );
};

export default ChipFilterItem;
