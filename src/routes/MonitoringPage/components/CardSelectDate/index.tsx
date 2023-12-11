import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrowRight from "../../../../assets/images/search.png";

const CardSelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div className="flex justify-between items-center pb-2 border-b-2 mb-3">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-mainGrey">Pilih Tanggal</p>

        <div className="flex flex-row justify-between">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="text-xs text-mainGrey"
            dateFormat="dd MMMM yyyy"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="text-xs text-mainGrey"
            dateFormat="dd MMMM yyyy"
          />
        </div>
      </div>

      <div>
        <img src={arrowRight} alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default CardSelectDate;
