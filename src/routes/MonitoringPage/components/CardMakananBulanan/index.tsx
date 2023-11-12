import riceImg from "../../../../assets/images/food/rice.png";
import chickenImg from "../../../../assets/images/food/chicken.png";
import fruitImg from "../../../../assets/images/food/fruit.png";
import vegetableImg from "../../../../assets/images/food/vegetable.png";

const CardMakananBulanan = () => {
  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <p>Konsumsi Makanan</p>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={riceImg} alt="rice" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Makanan Pokok</p>
          </div>
          <div className="flex items-end gap-1">
            <p className="text-2xl text-mainGreen">30</p>
            <p className="text-xs text-lightGrey">dari 30 hari</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img src={chickenImg} alt="chicken" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Lauk Pauk</p>
          </div>
          <div className="flex items-end gap-1">
            <p className="text-2xl text-mainGreen">30</p>
            <p className="text-xs text-lightGrey">dari 30 hari</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img
              src={vegetableImg}
              alt="vegetable"
              width="40px"
              height="40px"
            />
            <p className="text-sm text-mainGrey mb-1">Sayuran</p>
          </div>
          <div className="flex items-end gap-1">
            <p className="text-2xl text-lightGrey">20</p>
            <p className="text-xs text-lightGrey">dari 30 hari</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img src={fruitImg} alt="fruits" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Buah</p>
          </div>
          <div className="flex items-end gap-1">
            <p className="text-2xl text-lightGrey">20</p>
            <p className="text-xs text-lightGrey">dari 30 hari</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export default CardMakananBulanan;
