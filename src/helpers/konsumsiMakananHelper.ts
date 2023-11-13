import { useEffect, useState } from "react";
import {
  KonsumsiMakanan,
  dummyKonsumsiMakanan,
} from "../routes/MonitoringPage/MonitoringMakananPage/constants";

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
