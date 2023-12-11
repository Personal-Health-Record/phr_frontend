import { useNavigate } from "react-router-dom";
import {
  useGetAktifitasFisik,
  useGetAktifitasTargetFisik,
} from "../../../../helpers/aktifitasFisikHelper";
import { useGetTekananDarah } from "../../../../helpers/tekananDarahHelpers";

const TargetSection = () => {
  const { tekananDarah } = useGetTekananDarah();
  const { aktifitasFisik } = useGetAktifitasFisik();
  const { durasiTargetFisik } = useGetAktifitasTargetFisik();
  const navigate = useNavigate();

  const totalDuration =
    aktifitasFisik?.reduce((acc, current) => {
      return acc + current.duration;
    }, 0) || 0;

  const handleClickTekananDarah = () => {
    navigate("/monitoring/darah/change");
  };

  const handleClickUbahTargetFisik = () => {
    navigate("/monitoring/fisik/change");
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3 mt-5">
        Target Saya
      </h3>

      <div className="flex flex-col">
        <div className="flex flex-col shadow-md px-3 py-3 rounded-xl gap-2">
          <div className="flex justify-between">
            <p className="text-md font-bold text-mainGrey">Aktivitas Fisik</p>
            <p
              className="text-xs text-mainGrey"
              onClick={handleClickUbahTargetFisik}
            >
              Ubah target
            </p>
          </div>

          <div
            className="relative w-full bg-white border rounded-full"
            onClick={() => navigate("/monitoring/fisik")}
          >
            <div className="absolute right-0 top-0 mt-1.5 mr-2 text-mainGrey">
              <p className="text-xs">{durasiTargetFisik} menit</p>
            </div>
            <div
              className="h-7 bg-lightBlue rounded-full relative"
              style={{
                width: `${
                  totalDuration > durasiTargetFisik
                    ? "100%"
                    : `${(totalDuration / durasiTargetFisik) * 100}%`
                } `,
              }}
            >
              <div
                className={`absolute ${
                  totalDuration > 0 && "right-0 top-0 mt-1.5 mr-5"
                }  text-mainGrey`}
              >
                {totalDuration < durasiTargetFisik && (
                  <p className="text-xs">{totalDuration} menit</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col mt-5 shadow-md p-3 rounded-xl gap-2"
        onClick={handleClickTekananDarah}
      >
        <div className="flex justify-between">
          <p className="text-sm">Tekanan Darah</p>
          <p className="text-sm">Normal</p>
        </div>

        <div className="flex gap-10">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-lightGrey">SYSTOLE</p>
              <p className="text-xs text-mainGrey">mmHg</p>
            </div>
            <p className="text-xs font-bold">
              {tekananDarah?.systole === 0 ? "-" : tekananDarah?.systole}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-lightGrey">DIASTOLE</p>
              <p className="text-xs text-mainGrey">mmHg</p>
            </div>
            <p className="text-xs font-bold">
              {tekananDarah?.diastole === 0 ? "-" : tekananDarah?.diastole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSection;
