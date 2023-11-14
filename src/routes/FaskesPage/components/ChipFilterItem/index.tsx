interface Props {
  text: string;
  bgColor: string;
  textColor?: string;
}

const ChipFilterItem = ({ text, bgColor, textColor }: Props) => {
  return (
    <p
      className={`flex ${bgColor} rounded-2xl px-4 text-sm py-1 mb-1 w-28 justify-center ${textColor}`}
    >
      {text}
    </p>
  );
};

export default ChipFilterItem;
