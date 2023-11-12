import riceImg from "../../../../assets/images/food/rice.png";
import chickenImg from "../../../../assets/images/food/chicken.png";
import fruitImg from "../../../../assets/images/food/fruit.png";
import vegetableImg from "../../../../assets/images/food/vegetable.png";
import circleCheck from "../../../../assets/images/circle_check.png";
import circleCross from "../../../../assets/images/circle_cross.png";

const CardKonsumsiMakanan = () => {
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
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img
              src={circleCheck}
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1 mb-9">
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img
              src={circleCheck}
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1 mb-8">
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCross} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img
              src={circleCheck}
              alt="check"
              width="20px"
              height="20px"
              className="ml-1.5"
            />
          </div>
          <div className="flex max-h-5 justify-end gap-1">
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img src={circleCross} alt="check" width="20px" height="20px" />
            <img src={circleCross} alt="check" width="20px" height="20px" />
            <img src={circleCross} alt="check" width="20px" height="20px" />
            <img src={circleCross} alt="check" width="20px" height="20px" />
            <img src={circleCheck} alt="check" width="20px" height="20px" />
            <img
              src={circleCheck}
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
