import { useNavigate } from "react-router-dom";
import { useGetKonsumsiMakananTarget } from "../../../../helpers/konsumsiMakananHelper";
import { imageKonsumsiMakanan } from "../../constants";

const CardKonsumsiMakananMonitoring = () => {
  const { konsumsiMakananTarget } = useGetKonsumsiMakananTarget();
  const navigate = useNavigate();

  const handleUbahTarget = () => {
    navigate("/monitoring/makanan/change");
  };

  const handleToMonitoringMakanan = () => {
    navigate("/monitoring/makanan");
  };

  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl mb-24">
      <div className="flex justify-between items-center">
        <p>Konsumsi Makanan</p>
        <p className="text-xs text-lightGrey" onClick={handleUbahTarget}>
          Ubah target
        </p>
      </div>

      <div className="mt-5" onClick={handleToMonitoringMakanan}>
        {konsumsiMakananTarget?.map((konsumsi, index) => (
          <div key={`konsumsi-${index}`}>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <img
                  src={imageKonsumsiMakanan[konsumsi]}
                  alt="rice"
                  width="40px"
                  height="40px"
                />
                <p className="text-sm text-mainGrey mb-1">{konsumsi}</p>
              </div>
            </div>
            <div
              className="bg-slate-200 mt-1 ml-14"
              style={{ height: "1px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardKonsumsiMakananMonitoring;
