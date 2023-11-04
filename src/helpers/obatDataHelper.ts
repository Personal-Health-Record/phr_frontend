import { useEffect, useState } from "react";
import { Obat, Pengingat, dummyObatData } from "../routes/ObatPage/constants";

export const useGetObatData = () => {
  const [obatData, setObatData] = useState<Obat[]>();

  useEffect(() => {
    if (!obatData && typeof window !== "undefined") {
      const obatDataStorage = localStorage.getItem("obatDataStorage");
      if (obatDataStorage) {
        setObatData(JSON.parse(obatDataStorage));
        return;
      }

      setObatData(dummyObatData);
    }
  }, [obatData]);

  return {
    obatData,
  };
};

export const updateObatData = (
  updatedObatData: Obat,
  existingObatDataList: Obat[]
) => {
  const updatedObatDataList = existingObatDataList!.map((obat) => {
    if (obat.id === updatedObatData.id) {
      return updatedObatData;
    }
    return obat;
  });

  localStorage.setItem("obatDataStorage", JSON.stringify(updatedObatDataList));
  return updatedObatDataList;
};

export const addObatData = (
  newObatData: Obat,
  existingObatDataList: Obat[]
) => {
  const updatedObatDataList = existingObatDataList!.concat(newObatData);

  localStorage.setItem("obatDataStorage", JSON.stringify(updatedObatDataList));
};

export const getUpdatedPengingatDataList = (
  updatedPengingatData: Pengingat,
  existingPengingatDataList: Pengingat[]
) => {
  const updatedPengingatDataList = existingPengingatDataList!.map(
    (pengingat) => {
      if (pengingat.id === updatedPengingatData.id) {
        return updatedPengingatData;
      }
      return pengingat;
    }
  );

  return updatedPengingatDataList;
};
