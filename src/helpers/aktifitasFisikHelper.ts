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

export const useGetAktifitasTargetFisik = () => {
  const [durasiTargetFisik, setDurasiTargetFisik] = useState<number>(0);

  useEffect(() => {
    if (!durasiTargetFisik && typeof window !== "undefined") {
      const durasiTargetFisikStorage = localStorage.getItem(
        "durasiTargetFisikStorage"
      );
      if (durasiTargetFisikStorage) {
        setDurasiTargetFisik(JSON.parse(durasiTargetFisikStorage));
        return;
      }

      setDurasiTargetFisik(200);
    }
  }, [durasiTargetFisik]);

  return {
    durasiTargetFisik,
  };
};

export const changeAktifitasFisikTarget = (newAktifitas: number) => {
  localStorage.setItem(
    "durasiTargetFisikStorage",
    JSON.stringify(newAktifitas)
  );
};
