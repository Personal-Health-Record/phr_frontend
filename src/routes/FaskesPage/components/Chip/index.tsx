interface Props {
  text: string;
}

const Chip = ({ text }: Props) => {
  return (
    <p className="bg-superLightGrey rounded-2xl px-4 text-sm py-1 mb-1">
      {text}
    </p>
  );
};

export default Chip;
