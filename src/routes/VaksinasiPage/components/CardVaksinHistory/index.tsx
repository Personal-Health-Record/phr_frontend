import { formatDate } from "../../../../helpers/dateHelper";
import { Vaksinasi } from "../../models";

type HistoryProps = {
  vaksinData: Vaksinasi;
  handleClick: (id: string) => void;
};

const CardVaksinHistory = ({ vaksinData, handleClick }: HistoryProps) => {
  return (
    <div
      className="flex justify-between px-5 py-6 rounded-lg shadow-md"
      onClick={() => {
        handleClick(vaksinData.id);
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs text-mainGrey">{formatDate(vaksinData.date)}</p>
        <p className="text-sm text-lightGrey">Vaksin {vaksinData.type}</p>
      </div>

      <p className="text-xs text-mainGrey">{vaksinData.location}</p>
    </div>
  );
};

export default CardVaksinHistory;
