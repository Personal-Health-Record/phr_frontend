import { useEffect, useState } from "react";
import {
  KonsumsiMakanan,
  dummyKonsumsiMakanan,
} from "../routes/MonitoringPage/MonitoringMakananPage/constants";
import { dummyTargetMakanan } from "../routes/MonitoringPage/MonitoringMakananPage/constants";

export const useGetKonsumsiMakanan = () => {
  const [konsumsiMakanan, setKonsumsiMakanan] = useState<KonsumsiMakanan[]>();

  useEffect(() => {
    if (!konsumsiMakanan && typeof window !== "undefined") {
      const konsumsiMakananStorage = localStorage.getItem(
        "konsumsiMakananStorage"
      );
      if (konsumsiMakananStorage) {
        setKonsumsiMakanan(JSON.parse(konsumsiMakananStorage));
        return;
      }

      setKonsumsiMakanan(dummyKonsumsiMakanan);
    }
  }, [konsumsiMakanan]);

  return {
    konsumsiMakanan,
  };
};

export const addKonsumsiMakanan = (
  newKonsumsiMakanan: KonsumsiMakanan,
  existingKonsumsiMakananList: KonsumsiMakanan[]
) => {
  const updatedKonsumsiMakananList =
    existingKonsumsiMakananList!.concat(newKonsumsiMakanan);

  localStorage.setItem(
    "konsumsiMakananStorage",
    JSON.stringify(updatedKonsumsiMakananList)
  );
};

export const editKonsumsiMakanan = (
  newMakanan: KonsumsiMakanan,
  existingKonsumsiMakananList: KonsumsiMakanan[]
) => {
  const updatedKonsumsiMakananList = existingKonsumsiMakananList!.map(
    (makanan) => {
      if (makanan.timestamp === newMakanan.timestamp) {
        return newMakanan;
      }

      return makanan;
    }
  );

  localStorage.setItem(
    "konsumsiMakananStorage",
    JSON.stringify(updatedKonsumsiMakananList)
  );
};

export const useGetKonsumsiMakananTarget = () => {
  const [konsumsiMakananTarget, setKonsumsiMakananTarget] =
    useState<string[]>();

  useEffect(() => {
    if (!konsumsiMakananTarget && typeof window !== "undefined") {
      const konsumsiMakananTargetStorage = localStorage.getItem(
        "konsumsiMakananTargetStorage"
      );
      if (konsumsiMakananTargetStorage) {
        setKonsumsiMakananTarget(JSON.parse(konsumsiMakananTargetStorage));
        return;
      }

      setKonsumsiMakananTarget(dummyTargetMakanan);
    }
  }, [konsumsiMakananTarget]);

  return {
    konsumsiMakananTarget,
  };
};

export const editTargetKonsumsiMakanan = (newTarget: string[]) => {
  localStorage.setItem(
    "konsumsiMakananTargetStorage",
    JSON.stringify(newTarget)
  );
};
