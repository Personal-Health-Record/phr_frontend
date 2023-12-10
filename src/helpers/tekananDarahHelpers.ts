import { useEffect, useState } from "react";
import { TekananDarah } from "../routes/MonitoringPage/constants";

export const useGetTekananDarah = () => {
  const [tekananDarah, setTekananDarah] = useState<TekananDarah>();

  useEffect(() => {
    if (!tekananDarah && typeof window !== "undefined") {
      const tekananDarahStorage = localStorage.getItem("tekananDarahStorage");
      if (tekananDarahStorage) {
        setTekananDarah(JSON.parse(tekananDarahStorage));
        return;
      }

      setTekananDarah({
        diastole: 0,
        systole: 0,
      });
    }
  }, [tekananDarah]);

  return {
    tekananDarah,
  };
};

export const setTekananDarah = ({ systole, diastole }: TekananDarah) => {
  localStorage.setItem(
    "tekananDarahStorage",
    JSON.stringify({ systole, diastole })
  );
};
