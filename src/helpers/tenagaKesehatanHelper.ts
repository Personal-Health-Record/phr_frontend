import { useEffect, useState } from "react";
import { TenagaKesehatan } from "../routes/TenagaKesehatanPage/constants";
import { User } from "./constants";
import { useGetUserData } from "./userDataHelper";
import { dummyTenagaKesehatan } from "../routes/TenagaKesehatanPage/constants";

export type TenagaKesehatanUser = {
  tenkesId: string;
  userId: string;
  specialist: string;
  yoe: number;
  sip: number;
  almamater: string;
  practiceLocation: {
    name: string;
    id: number;
  };
  name: string;
  profilePicture: string;
};

const combineTenkesWithUser = (
  tenkesList: TenagaKesehatan[],
  userList: User[]
) => {
  const combinedList: TenagaKesehatanUser[] = [];
  for (let i = 0; i < tenkesList.length; i++) {
    const tenkes = tenkesList[i];
    const user = userList.find((user) => user.id === tenkes.userId);
    combinedList.push({
      tenkesId: tenkes.id,
      userId: user!.id,
      specialist: tenkes.specialist,
      yoe: tenkes.yoe,
      sip: tenkes.sip,
      almamater: tenkes.almamater,
      practiceLocation: tenkes.practiceLocation,
      name: user!.name,
      profilePicture: user!.profilePicture,
    });
  }
  return combinedList;
};

export const useGetTenagaKesehatanList = () => {
  const [listTenkes, setListTenkes] = useState<TenagaKesehatanUser[]>();
  const { userData } = useGetUserData();

  useEffect(() => {
    if (!userData) {
      return;
    }

    if (!listTenkes && typeof window !== "undefined") {
      const listTenkesStorage = localStorage.getItem("listTenkesStorage");
      if (listTenkesStorage) {
        setListTenkes(JSON.parse(listTenkesStorage));

        return;
      }

      const tenkesUserList = combineTenkesWithUser(
        dummyTenagaKesehatan,
        userData
      );

      localStorage.setItem("listTenkesStorage", JSON.stringify(tenkesUserList));

      setListTenkes(tenkesUserList);
    }
  }, [listTenkes, userData]);

  return {
    listTenkes,
  };
};

export const getTenkesBySIP = (sip: number) => {
  const listTenkesStorage = localStorage.getItem("listTenkesStorage");
  if (listTenkesStorage) {
    const listTenkes: TenagaKesehatanUser[] = JSON.parse(listTenkesStorage);

    return listTenkes.find((tenkes) => tenkes.sip === sip);
  }

  return null;
};

export const getTenkesByUserId = (userId: string) => {
  const listTenkesStorage = localStorage.getItem("listTenkesStorage");
  if (listTenkesStorage) {
    const listTenkes: TenagaKesehatanUser[] = JSON.parse(listTenkesStorage);

    return listTenkes.find((tenkes) => tenkes.userId === userId);
  }

  return null;
};

export const updateTenkesData = (data: TenagaKesehatanUser) => {
  const listTenkesStorage = localStorage.getItem("listTenkesStorage");
  const listTenkes: TenagaKesehatanUser[] = JSON.parse(listTenkesStorage!);

  const updatedDataList = listTenkes.map((existingData) => {
    if (existingData.tenkesId === data.tenkesId) {
      return data;
    }

    return existingData;
  });

  localStorage.setItem("listTenkesStorage", JSON.stringify(updatedDataList));

  return updatedDataList;
};
