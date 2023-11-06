import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Covid } from "../ScreeningPage/constants";
import { getSkriningById } from "../../helpers/skriningKesehatanHelper";
import Header from "../HomePage/components/Header";
import TextFieldDetail from "../ScreeningPage/components/TextFieldDetail";
import BottomNavbarDownloadShare from "../HomePage/components/BottomNavbarDownloadShare";

const DetailCovid = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [data, setData] = useState<Covid>();
  const id = searchParams.get("id");

  useEffect(() => {
    const skriningData = getSkriningById(parseInt(id || ""));

    setData(skriningData?.detail as Covid);
  }, [id]);

  return (
    <div>
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
      <BottomNavbarDownloadShare body="" link="" title="" />
    </div>
  );
};

export default DetailCovid;
