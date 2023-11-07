import arrowRight from "../../../../assets/images/arrow-right.png";

const CardSelectDate = () => {
  return (
    <div className="flex justify-between items-center pb-2 border-b-2 mb-3">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-mainGrey">Pilih Tanggal</p>
        <p className="text-xs text-lightGrey">
          11 Oktober 2023 - 20 Oktober 2023
        </p>
      </div>

      <div>
        <img src={arrowRight} alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default CardSelectDate;
