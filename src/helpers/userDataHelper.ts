import { useEffect, useState } from "react";
import { User, dummyUserData } from "./constants";

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

  useEffect(() => {
    if (!loggedInUser && typeof window !== "undefined") {
      const userEmail = localStorage.getItem("authUserEmail");
      if (!userEmail) {
        alert("Please login to continue");
        return;
      }

      if (userData) {
        setLoggedInUser(userData.find((user) => user.email === userEmail));
      }
    }
  }, [loggedInUser, userData]);

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

export const logoutUser = () => {
  localStorage.removeItem("authUserEmail");
};
