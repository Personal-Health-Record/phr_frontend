import { useEffect, useState } from "react";
import { User, dummyUserData } from "./constants";
import { useToaster } from "../contexts/ToasterContext";
import { deleteInsuranceDataByUserId } from "./insuranceDataHelper";
import { deleteNotificationDataByUserId } from "./notificationDataHelper";
import { deleteObatDataByUserId, deleteRiwayatAlergiDataByUserId } from "./obatDataHelper";

export const useGetUserData = () => {
  const [userData, setUserData] = useState<User[]>();

  useEffect(() => {
    if (!userData && typeof window !== "undefined") {
      const userDataStorage = localStorage.getItem("userDataStorage");
      if (userDataStorage) {
        setUserData(JSON.parse(userDataStorage));
        return;
      }

      setUserData(dummyUserData);
    }
  }, [userData]);

  return {
    userData,
  };
};

export const useGetLoggedInUser = () => {
  const { userData } = useGetUserData();
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const { toggleDiv } = useToaster();

  useEffect(() => {
    if (!loggedInUser && typeof window !== "undefined") {
      const userEmail = localStorage.getItem("authUserEmail");
      if (!userEmail) {
        toggleDiv("error", "Please login to continue");
        return;
      }

      if (userData) {
        setLoggedInUser(userData.find((user) => user.email === userEmail));
      }
    }
  }, [loggedInUser, toggleDiv, userData]);

  return {
    loggedInUser,
    userData,
  };
};

export const updateUserData = (
  updatedUserData: User,
  existingUserDataList: User[]
) => {
  const updatedUserDataList = existingUserDataList!.map((user) => {
    if (user.id === updatedUserData.id) {
      return updatedUserData;
    }
    return user;
  });

  localStorage.setItem("userDataStorage", JSON.stringify(updatedUserDataList));
  localStorage.setItem("authUserEmail", updatedUserData.email!);
};

export const updateFamilyData = (
  updatedUserData: User,
  existingUserDataList: User[]
) => {
  const updatedUserDataList = existingUserDataList!.map((user) => {
    if (user.id === updatedUserData.id) {
      return updatedUserData;
    }
    return user;
  });

  localStorage.setItem("userDataStorage", JSON.stringify(updatedUserDataList));
};

export const logoutUser = () => {
  localStorage.removeItem("authUserEmail");
};

export const forgotPasswordUser = (
  userEmail: string,
  password: string
): { status: string } => {
  const existingUserDataList =
    JSON.parse(localStorage.getItem("userDataStorage")!) === null
      ? dummyUserData
      : JSON.parse(localStorage.getItem("userDataStorage")!);

  const selectedUser = existingUserDataList.find(
    (user: User) => user.email === userEmail
  );

  if (!selectedUser) {
    return {
      status: "User tidak ditemukan",
    };
  }

  const newUserData = {
    ...selectedUser,
    password: password,
  };

  const updatedUserDataList = existingUserDataList.map((user: User) => {
    if (user.id === newUserData.id) {
      return newUserData;
    }
    return user;
  });

  localStorage.setItem("userDataStorage", JSON.stringify(updatedUserDataList));

  return {
    status: "success",
  };
};

export const isLoggedInUserNewUser = (loggedInUser: User) => {
  return !dummyUserData.find((user) => user.email === loggedInUser?.email);
}

export const deleteUserDataByUserId = (
  userId: string,
) => {
  const userDataList = JSON.parse(localStorage.getItem("userDataStorage")!);
  const updatedUserDataList = userDataList.filter((user: User) => user.id !== userId);

  localStorage.setItem(
    "userDataStorage",
    JSON.stringify(updatedUserDataList)
  );

  deleteRelationalUserData(userId);
}

const deleteRelationalUserData = (
  userId: string,
) => {
  deleteInsuranceDataByUserId(userId);
  deleteNotificationDataByUserId(userId);
  deleteObatDataByUserId(userId);
  deleteRiwayatAlergiDataByUserId(userId);
}