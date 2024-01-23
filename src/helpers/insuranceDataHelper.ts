import { useEffect, useState } from "react";
import { Insurance, dummyInsuranceData } from "../routes/ProfilePage/constants";

export const useGetInsuranceData = () => {
  const [insuranceData, setInsuranceData] = useState<Insurance[]>();

  useEffect(() => {
    if (!insuranceData && typeof window !== "undefined") {
      const insuranceDataStorage = localStorage.getItem("insuranceDataStorage");
      if (insuranceDataStorage) {
        setInsuranceData(JSON.parse(insuranceDataStorage));
        return;
      }

      setInsuranceData(dummyInsuranceData);
    }
  }, [insuranceData]);

  return {
    insuranceData,
  };
};

export const updateInsuranceData = (
  updatedInsuranceData: Insurance,
  existingInsuranceDataList: Insurance[]
) => {
  const updatedInsuranceDataList = existingInsuranceDataList!.map((insurance) => {
    if (insurance.id === updatedInsuranceData.id) {
      return updatedInsuranceData;
    }
    return insurance;
  });

  localStorage.setItem(
    "insuranceDataStorage",
    JSON.stringify(updatedInsuranceDataList)
  );
}

export const deleteInsuranceDataByUserId = (
  userId: string,
) => {
  const insuranceDataList = JSON.parse(localStorage.getItem("insuranceDataStorage")!);
  if (!insuranceDataList) {
    return;
  }

  const updatedInsuranceDataList = insuranceDataList.filter((insurance: Insurance) => insurance.userId !== userId);

  localStorage.setItem(
    "insuranceDataStorage",
    JSON.stringify(updatedInsuranceDataList)
  );
}