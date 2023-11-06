import { Resume } from "../../models";
import { dummyResumeData } from "../../constants";
import { formatDate, getDiffDate } from "../../../../helpers/dateHelper";

type TimelineProps = {
  dataRiwayat: Resume[];
  pageNumber: number;
  pageSize: number;
};

const Timeline = (props: TimelineProps) => {
  const getRangeTime = (index: number) => {
    const currentResume = props.dataRiwayat[index];
    let nextResume = props.dataRiwayat[index + 1];
    if (!nextResume) {
      // get from dummy data to get the next date on the next page
      nextResume = dummyResumeData[props.pageNumber * props.pageSize];
    }

    if (nextResume) {
      const dateBefore = new Date(currentResume.date);
      const dateAfter = new Date(nextResume.date);
      return `${getDiffDate(dateBefore, dateAfter)} hari`;
    }
  };

  const renderRangeTime = (index: number) => {
    const rangeTime = getRangeTime(index);
    return rangeTime && <p className="text-xs flex-1 text-end ">{rangeTime}</p>;
  };

  return (
    <div className="flex flex-col gap-3">
      {props.dataRiwayat.map((riwayat, index) => (
        <div className="flex justify-center gap-3 relative" key={index}>
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs flex-1 text-end ">
              {formatDate(riwayat.date)}
            </p>
            {renderRangeTime(index)}
          </div>

          <div className="relative flex">
            <div className="bg-blue-400 w-5 h-5 rounded-xl z-0" />
            <div className="bg-slate-300 w-1 h-16 absolute left-1/2 transform -translate-x-1/2 z-[-1]" />
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs ">{riwayat.location}</p>
            <p className="text-xs ">{riwayat.diagnose}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
