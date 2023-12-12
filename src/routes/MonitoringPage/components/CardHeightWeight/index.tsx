import { useNavigate } from "react-router-dom";
import { useGetUserPhysique } from "../../../../helpers/dataTrackerHelper";
import weightImg from "../../../../assets/images/weight.png";
import heightImg from "../../../../assets/images/height.png";

const CardHeightWeight = () => {
  const navigate = useNavigate();
  const { userPhysique } = useGetUserPhysique();

  const handleClickCard = () => {
    navigate("/monitoring/insert-data");
  };

  return (
    <div className="flex gap-2 justify-between">
      <div
        className="flex shadow-md px-5 py-3 w-fit rounded-xl"
        onClickCapture={handleClickCard}
      >
        <div className="flex items-center gap-2">
          <img src={weightImg} alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Berat Badan</p>
            <p className="text-xs text-lightGrey">
              {userPhysique?.weight ? `${userPhysique.weight} kg` : "-"}
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex shadow-md px-4 py-3 w-fit rounded-xl"
        onClickCapture={handleClickCard}
      >
        <div className="flex items-center gap-2">
          <img src={heightImg} alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Tinggi Badan</p>

            <p className="text-xs text-lightGrey">
              {userPhysique?.height ? `${userPhysique.height} cm` : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeightWeight;
