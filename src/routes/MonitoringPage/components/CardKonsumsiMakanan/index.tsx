import riceImg from "../../../../assets/images/food/rice.png";
import chickenImg from "../../../../assets/images/food/chicken.png";
import fruitImg from "../../../../assets/images/food/fruit.png";
import vegetableImg from "../../../../assets/images/food/vegetable.png";
import circleCheck from "../../../../assets/images/circle_check.png";
import circleCross from "../../../../assets/images/circle_cross.png";
import { useGetKonsumsiMakanan } from "../../../../helpers/konsumsiMakananHelper";
import { getDayOfWeekFromTimestamp } from "../../../NewsPage/helper";

interface Props {
  startDate: Date;
  endDate: Date;
}

const CardKonsumsiMakanan = ({ startDate, endDate }: Props) => {
  const { konsumsiMakanan } = useGetKonsumsiMakanan();

  const filteredData =
    konsumsiMakanan?.filter((item) => {
      const activityDate = new Date(parseInt(item.timestamp));
      const activityDay = activityDate.toISOString().split("T")[0]; // Get only the date part

      const startDay = startDate.toISOString().split("T")[0];
      const endDay = endDate.toISOString().split("T")[0];

      return activityDay >= startDay && activityDay <= endDay;
    }) || [];

  const makananPokok = filteredData?.filter(
    (makanan) => makanan.category === "Makanan Pokok"
  );

  const laukPauk = filteredData?.filter(
    (makanan) => makanan.category === "Lauk Pauk"
  );

  const sayuran = filteredData?.filter(
    (makanan) => makanan.category === "Sayuran"
  );

  const buah = filteredData?.filter((makanan) => makanan.category === "Buah");

  const listDayMakananPokok = makananPokok?.map((makanan) =>
    getDayOfWeekFromTimestamp(makanan.timestamp)
  );

  const listdayLaukPauk = laukPauk?.map((makanan) =>
    getDayOfWeekFromTimestamp(makanan.timestamp)
  );

  const listDaySayuran = sayuran?.map((makanan) =>
    getDayOfWeekFromTimestamp(makanan.timestamp)
  );

  const listDayBuah = buah?.map((makanan) =>
    getDayOfWeekFromTimestamp(makanan.timestamp)
  );
  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <p>Konsumsi Makanan</p>

      <div className="flex justify-end gap-4 mt-2 mr-1">
        <p className="text-sm font-bold">S</p>
        <p className="text-sm font-bold">S</p>
        <p className="text-sm font-bold">R</p>
        <p className="text-sm font-bold">K</p>
        <p className="text-sm font-bold">J</p>
        <p className="text-sm font-bold">S</p>
        <p className="text-sm font-bold">M</p>
      </div>

      <div className="flex">
        <div className="mr-3">
          <img
            src={riceImg}
            alt="rice"
            width="40px"
            height="40px"
            className="mb-4"
          />
          <img
            src={chickenImg}
            alt="chicken"
            width="40px"
            height="40px"
            className="mb-4"
          />
          <img
            src={vegetableImg}
            alt="vegetable"
            width="40px"
            height="40px"
            className="mb-4"
          />
          <img
            src={fruitImg}
            alt="fruit"
            width="40px"
            height="40px"
            className="mb-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm w-24 text-mainGrey mb-1">Makanan Pokok</p>
          <p className="text-sm w-3 text-mainGrey mb-5">Lauk Pauk</p>
          <p className="text-sm w-3 text-mainGrey mb-6">Sayuran</p>
          <p className="text-sm w-3 text-mainGrey">Buah</p>
        </div>
        <div className="flex flex-col">
          <div className="flex max-h-5 justify-end gap-1 mb-8 mt-3">
            <img
              src={
                listDayMakananPokok?.includes("Monday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Tuesday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Wednesday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Thursday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Friday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Saturday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayMakananPokok?.includes("Sunday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1 mb-9">
            <img
              src={
                listdayLaukPauk?.includes("Monday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Tuesday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Wednesday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Thursday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Friday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Saturday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listdayLaukPauk?.includes("Sunday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1 mb-8">
            <img
              src={
                listDaySayuran?.includes("Monday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Tuesday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Wednesday")
                  ? circleCheck
                  : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Thursday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Friday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Saturday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDaySayuran?.includes("Sunday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1">
            <img
              src={listDayBuah?.includes("Monday") ? circleCheck : circleCross}
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={listDayBuah?.includes("Tuesday") ? circleCheck : circleCross}
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayBuah?.includes("Wednesday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayBuah?.includes("Thursday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={listDayBuah?.includes("Friday") ? circleCheck : circleCross}
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={
                listDayBuah?.includes("Saturday") ? circleCheck : circleCross
              }
              alt="check"
              width="20px"
              height="20px"
            />
            <img
              src={listDayBuah?.includes("Sunday") ? circleCheck : circleCross}
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4"></div>
    </div>
  );
};

export default CardKonsumsiMakanan;
