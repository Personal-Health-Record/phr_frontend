import { useNavigate } from "react-router-dom";
import { Rujukan } from "../../models";
import { formatDate } from "../../../../helpers/dateHelper";

type RiwayatRujukanCardProps = {
  rujukanData: Rujukan;
};

const RiwayatRujukanCard = ({ rujukanData }: RiwayatRujukanCardProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/rujukan/details/${rujukanData.id}`);
  };

  return (
    <div className="flex flex-col gap-2 p-4 border-b-2" onClick={handleOnClick}>
      <div className="flex justify-between items-center">
        <p className="text-sm">{formatDate(rujukanData.date)}</p>
        <p className="text-sm bg-superLightGrey px-4 py-1 rounded-2xl text-mainGrey">
          Rujukan
        </p>
      </div>
      <div className="flex mt-2">
        <div className="flex-3 flex-col gap-1">
          <p className="text-sm text-lightGrey">Faskes rujukan</p>
          <p className="text-sm text-lightGrey">Faskes perujuk</p>
          <p className="text-sm text-lightGrey">Diagnosis</p>
        </div>
        <div className="flex-1 flex-col gap-1">
          <p className="text-sm text-lightGrey">: {rujukanData.location}</p>
          <p className="text-sm text-lightGrey">
            : {rujukanData.referenceLocation}
          </p>
          <p className="text-sm text-lightGrey">: {rujukanData.diagnose}</p>
        </div>
      </div>
    </div>
  );
};

export default RiwayatRujukanCard;
