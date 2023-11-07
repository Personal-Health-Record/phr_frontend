import { useNavigate } from "react-router-dom";

const TargetSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3 mt-5">
        Target Saya
      </h3>

      <div
        className="flex flex-col"
        onClick={() => navigate("/monitoring/insert-data-fisik")}
      >
        <div className="flex flex-col shadow-md px-3 py-3 rounded-xl gap-2">
          <div className="flex justify-between">
            <p className="text-md font-bold text-mainGrey">Aktivitas Fisik</p>
            <p className="text-xs text-mainGrey">Belum cukup</p>
          </div>

          <div className="relative w-full bg-white border rounded-full">
            <div className="absolute right-0 top-0 mt-1.5 mr-2 text-mainGrey">
              <p className="text-xs">30 menit</p>
            </div>
            <div
              className="h-7 bg-lightBlue rounded-full relative"
              style={{ width: "70%" }}
            >
              <div className="absolute right-0 top-0 mt-1.5 mr-5 text-mainGrey">
                <p className="text-xs">20 menit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 shadow-md p-3 rounded-xl gap-2">
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
            <p className="text-xs font-bold">120</p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-lightGrey">DIASTOLE</p>
              <p className="text-xs text-mainGrey">mmHg</p>
            </div>
            <p className="text-xs font-bold">80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSection;
