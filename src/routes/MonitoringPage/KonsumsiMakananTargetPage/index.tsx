import Header from "../../../components/Header";
import riceImg from "../../../assets/images/food/rice.png";
import chickenImg from "../../../assets/images/food/chicken.png";
import fruitImg from "../../../assets/images/food/fruit.png";
import vegetableImg from "../../../assets/images/food/vegetable.png";
import milkImg from "../../../assets/images/food/milk.png";
import { useNavigate } from "react-router-dom";
import {
  editTargetKonsumsiMakanan,
  useGetKonsumsiMakananTarget,
} from "../../../helpers/konsumsiMakananHelper";
import { useState } from "react";

const KonsumsiMakananTargetPage = () => {
  const { konsumsiMakananTarget } = useGetKonsumsiMakananTarget();
  const navigate = useNavigate();

  const [rice, setRice] = useState(false);
  const [vegetable, setVegetable] = useState(false);
  const [lauk, setLauk] = useState(false);
  const [fruit, setFruit] = useState(false);
  const [milk, setMilk] = useState(false);

  const handleSubmit = () => {
    const target = [];
    console.log({ rice, lauk, vegetable, fruit, milk });

    if (rice) {
      target.push("Makanan Pokok");
    }

    if (lauk) {
      target.push("Lauk Pauk");
    }

    if (vegetable) {
      target.push("Sayuran");
    }

    if (fruit) {
      target.push("Buah");
    }

    if (milk) {
      target.push("Susu");
    }

    editTargetKonsumsiMakanan(target);

    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">Ubah Target</h3>

        <div className="ml-4">
          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={riceImg} alt="rice" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Makanan Pokok</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
                checked={rice}
                onClick={() => {
                  setRice(!rice);
                }}
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src={chickenImg}
                  alt="chicken"
                  width={50}
                  className="mr-3"
                />
                <p className="text-sm text-mainGrey">Lauk Pauk</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
                checked={lauk}
                onClick={() => {
                  setLauk(!lauk);
                }}
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src={vegetableImg}
                  alt="vegetables"
                  width={50}
                  className="mr-3"
                />
                <p className="text-sm text-mainGrey">Sayuran</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
                checked={vegetable}
                onClick={() => {
                  setVegetable(!vegetable);
                }}
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={fruitImg} alt="fruit" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Buah</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
                checked={fruit}
                onClick={() => {
                  setFruit(!fruit);
                }}
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={milkImg} alt="milk" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Susu</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
                checked={milk}
                onClick={() => {
                  setMilk(!milk);
                }}
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>
        </div>

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mx-3 mb-6 mt-3"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default KonsumsiMakananTargetPage;
