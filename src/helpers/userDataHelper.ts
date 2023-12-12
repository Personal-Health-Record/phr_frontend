import { useEffect, useState } from "react";
import { User, dummyUserData } from "./constants";
import { useToaster } from "../contexts/ToasterContext";

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
