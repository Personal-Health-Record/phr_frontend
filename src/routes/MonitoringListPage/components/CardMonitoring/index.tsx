import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  date: string;
}

const CardMonitoring = ({ date }: Props) => {
  return (
    <div className="flex border-b-2 pb-3 pt-5 items-center justify-between pl-4">
      <div className="flex flex-col gap-1">
        <p className="text-md text-lightGrey">{date}</p>
      </div>

      <img src={arrowRight} alt="" width={30} height={30} />
    </div>
  );
};

export default CardMonitoring;
