interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <h3 className="font-semibold text-mainGrey pl-2">{text}</h3>;
};

export default Title;
