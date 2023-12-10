import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePDF } from "react-to-pdf";

import { PTM } from "../constants";
import { getSkriningById } from "../../../helpers/skriningKesehatanHelper";
import Header from "../../HomePage/components/Header";
import TextFieldDetail from "../components/TextFieldDetail";
import CardPemeriksaan from "../components/CardPemeriksaan";
import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";

const DetailPTM = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [data, setData] = useState<PTM>();
  const id = searchParams.get("id");

  const { toPDF, targetRef } = usePDF({
    filename: `Detail PTM.pdf`,
  });

  useEffect(() => {
    const skriningData = getSkriningById(parseInt(id || ""));

    setData(skriningData?.detail as PTM);
  }, [id]);

  return (
    <div ref={targetRef}>
      <Header title="Riwayat Skrining Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey text-sm">Hasil Skrining</h3>

        <TextFieldDetail
          title="Riwayat merokok"
          data={data?.rokok ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Aktifitas Fisik 30 Menit per Hari"
          data={data?.fisik ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Konsumsi Buah dan Sayur Setiap Hari"
          data={data?.buahSayur ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Riwayat Keluarga yang menderita Diabetes"
          data={data?.penyakit.includes("Diabetes") ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Riwayat Keluarga yang menderita penyakit Jantung"
          data={data?.penyakit.includes("Jantung") ? "Ya" : "Tidak"}
        />

        <h3 className="font-semibold text-mainGrey text-sm">
          Hasil Pemeriksaan
        </h3>

        <CardPemeriksaan
          title="Tekanan Darah"
          value={`${data?.systole} mmHg`}
        />
        <CardPemeriksaan title="Gula Darah" value={`${data?.gula} mg/dL`} />
        <CardPemeriksaan
          title="Berat Badan"
          value={`${data?.berat.toString()} kg` || ""}
        />

        <CardPemeriksaan
          title="Lingkar Perut"
          value={`${data?.lingkar.toString()} cm` || ""}
        />

        <p className="text-center shadow-md py-5 px-3 rounded-xl mb-20">
          Anda memiliki faktor resiko penyakit tidak menular yang
          <span className="font-semibold text-mainBlue"> rendah</span>{" "}
        </p>
      </div>
      <BottomNavbarDownloadShare body="" link="" title="" toPDF={toPDF} />
    </div>
  );
};

export default DetailPTM;
