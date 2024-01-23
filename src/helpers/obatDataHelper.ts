import { useEffect, useState } from "react";
import { Obat, Pengingat, RiwayatAlergiObat, dummyObatData, dummyRiwayatAlergiObat } from "../routes/ObatPage/constants";

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

export const deleteObatDataByUserId = (
  userId: string,
) => {
  const obatDataList = JSON.parse(localStorage.getItem("obatDataStorage")!);
  if (!obatDataList) {
    return;
  }

  const updatedObatDataList = obatDataList.filter((obat: Obat) => obat.userId !== userId);

  localStorage.setItem(
    "obatDataStorage",
    JSON.stringify(updatedObatDataList)
  );
}

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

export const getFilteredPengingatObatData = (
  obatData: Obat[],
  loggedInUserId: string
): Obat[] => {
  const filteredObatData = obatData.filter((obat) => {
    const isLoggedInUserObat = obat.userId === loggedInUserId;
      const today = new Date();
      const dateFrom = new Date(obat.dateFrom);
      const dateTo = new Date(obat.dateTo);
      const isDateValid = today >= dateFrom && today <= dateTo;

      return isLoggedInUserObat && isDateValid;
  });

  return filteredObatData;
}

export const useGetRiwayatAlergiData = () => {
  const [riwayatAlergiData, setRiwayatAlergiData] = useState<RiwayatAlergiObat[]>();

  useEffect(() => {
    if (!riwayatAlergiData && typeof window !== "undefined") {
      const riwayatAlergiDataStorage = localStorage.getItem("riwayatAlergiDataStorage");
      if (riwayatAlergiDataStorage) {
        setRiwayatAlergiData(JSON.parse(riwayatAlergiDataStorage));
        return;
      }

      setRiwayatAlergiData(dummyRiwayatAlergiObat);
    }
  }, [riwayatAlergiData]);

  return {
    riwayatAlergiData,
  };
}

export const upsertRiwayatAlergiData = (
  updatedRiwayatAlergiData: RiwayatAlergiObat,
  existingRiwayatAlergiDataList: RiwayatAlergiObat[]
) => {
  let isUpdate = false;
  const updatedRiwayatAlergiDataList = existingRiwayatAlergiDataList!.map((riwayatAlergi) => {
    if (riwayatAlergi.id === updatedRiwayatAlergiData.id) {
      isUpdate = true;
      return updatedRiwayatAlergiData;
    }
    return riwayatAlergi;
  });

  if (!isUpdate) {
    updatedRiwayatAlergiDataList.push(updatedRiwayatAlergiData);
  }

  localStorage.setItem("riwayatAlergiDataStorage", JSON.stringify(updatedRiwayatAlergiDataList));
  return updatedRiwayatAlergiDataList;
}

export const deleteRiwayatAlergiDataByUserId = (
  userId: string,
) => {
  const riwayatAlergiDataList = JSON.parse(localStorage.getItem("riwayatAlergiDataStorage")!);
  if (!riwayatAlergiDataList) {
    return;
  }

  const updatedRiwayatAlergiDataList = riwayatAlergiDataList.filter((riwayatAlergi: RiwayatAlergiObat) => riwayatAlergi.userId !== userId);

  localStorage.setItem(
    "riwayatAlergiDataStorage",
    JSON.stringify(updatedRiwayatAlergiDataList)
  );
}
