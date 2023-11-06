import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../HomePage/components/Header";

const ScreeningPTMResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const totalScore = searchParams.get("score");

  const isPtm = useMemo(() => {
    if (totalScore) {
      return parseInt(totalScore) > 5 ? true : false;
    }

    return false;
  }, [totalScore]);

  return (
    <div className="flex flex-col">
      <Header title="Skrining Mental " />

      <div className="flex py-5 px-4 flex-col gap-10">
        <p className="text-center shadow-md py-5 px-3 rounded-xl">
          Anda memiliki faktor resiko penyakit tidak menular yang
          <span className="font-semibold text-mainBlue">
            {isPtm ? " tinggi" : " rendah"}
          </span>{" "}
        </p>

        <div className="flex flex-col gap-5">
          <button
            className="bg-mainBlue rounded-3xl text-white font-semibold py-3"
            onClick={() => navigate("/screening")}
          >
            Kembali ke Skrining Kesehatan
          </button>
          <button className="text-mainGrey" onClick={() => navigate("/")}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreeningPTMResult;
