import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Covid } from "../constants";
import { getSkriningById } from "../../../helpers/skriningKesehatanHelper";
import Header from "../../HomePage/components/Header";
import TextFieldDetail from "../components/TextFieldDetail";
import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";

const DetailCovid = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [data, setData] = useState<Covid>();
  const id = searchParams.get("id");

  const { toPDF, targetRef } = usePDF({
    filename: `Detail Covid.pdf`,
  });

  useEffect(() => {
    const skriningData = getSkriningById(parseInt(id || ""));

    setData(skriningData?.detail as Covid);
  }, [id]);

  return (
    <div ref={targetRef}>
      <Header title="Riwayat Skrining Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-2">
        <h3 className="font-semibold text-mainGrey text-sm">
          Riwayat Kontak dan Perjalanan
        </h3>

        <TextFieldDetail
          title="Riwayat kontak erat dengan penderita"
          data={data?.kontak ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Riwayat perjalanan luar negeri"
          data={data?.luarNegri ? "Ya" : "Tidak"}
        />
        <TextFieldDetail
          title="Riwayat perjalanan area penularan"
          data={data?.area ? "Ya" : "Tidak"}
        />

        <TextFieldDetail
          title="Gejala yang dirasakan"
          data={data?.gejala || ""}
        />
      </div>
      <BottomNavbarDownloadShare body="" link="" title="" toPDF={toPDF} />
    </div>
  );
};

export default DetailCovid;
