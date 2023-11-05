interface Props {
  title: string;
  data: string;
}
const CardDetails = ({ data, title }: Props) => {
  return (
    <div className="flex flex-col gap-1 border-b-2 py-3">
      <p className="text-sm">{title}</p>
      <p className="text-sm text-mainGrey">{data}</p>
    </div>
  );
};

export default CardDetails;
