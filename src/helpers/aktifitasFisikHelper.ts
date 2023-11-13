import { useEffect, useState } from "react";
import {
  AktifitasFisik,
  dummyAktifitasFisik,
} from "../routes/MonitoringPage/MonitoringAktifitasPage/constants";

export const useGetAktifitasFisik = () => {
  const [aktifitasFisik, setAktifitasFisik] = useState<AktifitasFisik[]>();

  useEffect(() => {
    if (!aktifitasFisik && typeof window !== "undefined") {
      const aktifitasFisikStorage = localStorage.getItem(
        "aktifitasFisikStorage"
      );
      if (aktifitasFisikStorage) {
        setAktifitasFisik(JSON.parse(aktifitasFisikStorage));
        return;
      }

      setAktifitasFisik(dummyAktifitasFisik);
    }
  }, [aktifitasFisik]);

  return {
    aktifitasFisik,
  };
};

export const addAktifitasFisik = (
  newAktifitas: AktifitasFisik,
  existingAktifitasFisikList: AktifitasFisik[]
) => {
  const updatedAktifitasFisikList =
    existingAktifitasFisikList!.concat(newAktifitas);

  localStorage.setItem(
    "aktifitasFisikStorage",
    JSON.stringify(updatedAktifitasFisikList)
  );
};
