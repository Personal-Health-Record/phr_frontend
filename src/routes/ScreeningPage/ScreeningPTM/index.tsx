import { useNavigate } from "react-router-dom";
import {
  addSkriningKesehatan,
  useGetSkriningKesehatanList,
} from "../../../helpers/skriningKesehatanHelper";
import { useState } from "react";
import { getTodayFormatted } from "../../../helpers/dateHelper";
import { Skrining } from "../constants";
import Header from "../../HomePage/components/Header";
import FormRokok from "../components/FormRokok";
import FormFisik from "../components/FormFisik";
import FormBuahSayur from "../components/FormBuahSayur";
import FormPenyakitKeluarga from "../components/FormPenyakitKeluarga";
import FormHasilPemeriksaan from "../components/FormHasilPemeriksaan";

const ScreeningPTM = () => {
  const navigate = useNavigate();
  const { listSkrining } = useGetSkriningKesehatanList();
  const [rokok, setRokok] = useState(false);
  const [fisik, setFisik] = useState(false);
  const [buahSayur, setBuahSayur] = useState(false);
  const [totalPenyakit, setTotalPenyakit] = useState(0);
  const [listPenyakit, setListPenyakit] = useState<string[]>([]);
  const [systole, setSystole] = useState(0);
  const [diastole, setDiastole] = useState(0);
  const [gula, setGula] = useState(0);
  const [berat, setBerat] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [lingkar, setLingkar] = useState(0);

  const [error, setError] = useState(false);

  const [isCheckRokok, setIsCheckRokok] = useState(false);
  const [isCheckFisik, setIsCheckFisik] = useState(false);
  const [isCheckBuahSayur, setIsCheckBuahSayur] = useState(false);

  const handleSubimt = () => {
    let totalScore = 0;

    if (rokok) {
      totalScore += 1;
    }
    if (fisik) {
      totalScore += 1;
    }
    if (buahSayur) {
      totalScore += 1;
    }

    totalScore += totalPenyakit;

    const skriningData: Skrining = {
      id: Math.floor(Math.random() * 10000) + 1,
      date: getTodayFormatted(),
      location: "Mandiri",
      skriningType: "Skrining Penyakit Tidak Menular",
      detail: {
        rokok: rokok,
        fisik: fisik,
        buahSayur: buahSayur,
        penyakit: listPenyakit.join(", "),
        systole: systole,
        diastole: diastole,
        tinggi: tinggi,
        berat: berat,
        lingkar: lingkar,
        gula: gula,
      },
    };

    if (
      isCheckBuahSayur === false ||
      isCheckFisik === false ||
      isCheckRokok === false ||
      systole === 0 ||
      diastole === 0 ||
      gula === 0 ||
      berat === 0 ||
      tinggi === 0 ||
      lingkar === 0
    ) {
      setError(true);
      return;
    }

    setError(false);

    addSkriningKesehatan(skriningData, listSkrining || []);

    navigate(`/screening/ptm/result?score=${totalScore}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Skrining PTM" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Skrining Kesehatan
        </h3>

        <FormRokok setRokok={setRokok} onClickRokok={setIsCheckRokok} />
        <FormFisik setFisik={setFisik} onClickFisik={setIsCheckFisik} />
        <FormBuahSayur
          setBuahSayur={setBuahSayur}
          onClickSayur={setIsCheckBuahSayur}
        />
        <FormPenyakitKeluarga
          setTotalPenyakit={setTotalPenyakit}
          setListPenyakit={setListPenyakit}
        />
        <FormHasilPemeriksaan
          setBerat={setBerat}
          setDiastole={setDiastole}
          setGula={setGula}
          setLingkar={setLingkar}
          setSystole={setSystole}
          setTinggi={setTinggi}
        />

        {error && (
          <p className="text-red-500 text-xs ml-3">
            Harap isi semua form yang ada
          </p>
        )}

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3"
          onClick={handleSubimt}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScreeningPTM;
