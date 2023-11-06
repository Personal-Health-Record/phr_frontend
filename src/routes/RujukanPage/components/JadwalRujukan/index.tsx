import { useNavigate } from "react-router-dom";
import { dummyRujukanData } from "../../constants";
import { formatDate } from "../../../../helpers/dateHelper";

const JadwalRujukan = () => {
  const navigate = useNavigate();
  const latestRujukan = dummyRujukanData[0];

  const handleClick = () => {
    navigate(`/rujukan/details/${latestRujukan.id}`);
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">
        Jadwal Rujukan Akan Datang
      </h3>

      <div
        className="flex flex-col gap-2 shadow-md p-4 rounded-xl"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <p className="text-sm">{formatDate(latestRujukan.date)}</p>
          <p className="text-sm bg-superLightGrey px-4 py-1 rounded-2xl text-mainGrey">
            Rujukan
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-lightGrey">Faskes rujukan</p>
            <p className="text-sm text-lightGrey">Faskes perujuk</p>
            <p className="text-sm text-lightGrey">Diagnosis</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-lightGrey">: {latestRujukan.location}</p>
            <p className="text-sm text-lightGrey">
              : {latestRujukan.referenceLocation}
            </p>
            <p className="text-sm text-lightGrey">: {latestRujukan.diagnose}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalRujukan;
