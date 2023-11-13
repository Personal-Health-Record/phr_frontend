import riceImg from "../../../../assets/images/food/rice.png";
import chickenImg from "../../../../assets/images/food/chicken.png";
import fruitImg from "../../../../assets/images/food/fruit.png";
import vegetableImg from "../../../../assets/images/food/vegetable.png";
import imageCheckAll from "../../../../assets/images/pengingat/check_all.png";
import { useNavigate } from "react-router-dom";

const CardKonsumsiMakananMonitoring = () => {
  const navigate = useNavigate();

  const handleUbahTarget = () => {
    navigate("/monitoring/makanan/change");
  };

  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <div className="flex justify-between items-center">
        <p>Konsumsi Makanan</p>
        <p className="text-xs text-lightGrey" onClick={handleUbahTarget}>
          Ubah target
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={riceImg} alt="rice" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Makanan Pokok</p>
          </div>
          <div className="flex gap-1 bg-mainGreen rounded-xl items-center px-3 py-1">
            <img src={imageCheckAll} alt="check" width="20px" height="20px" />
            <p className="text-xs text-white">Dikonsumsi</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img src={chickenImg} alt="chicken" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Lauk Pauk</p>
          </div>
          <div className="flex gap-1 bg-mainGreen rounded-xl items-center px-3 py-1">
            <img src={imageCheckAll} alt="check" width="20px" height="20px" />
            <p className="text-xs text-white">Dikonsumsi</p>
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
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img src={fruitImg} alt="fruits" width="40px" height="40px" />
            <p className="text-sm text-mainGrey mb-1">Buah</p>
          </div>
        </div>
        <div className="bg-slate-200 mt-1 ml-14" style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export default CardKonsumsiMakananMonitoring;
