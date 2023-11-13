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
