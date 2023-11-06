import { useEffect, useState } from "react";
import {
  Notification,
  dummyNotification,
} from "../routes/NotificationsPage/constants";

export const useGetNotificationData = () => {
  const [notificationData, setNotificationData] = useState<Notification[]>();

  useEffect(() => {
    if (!notificationData && typeof window !== "undefined") {
      const notificationDataStorage = localStorage.getItem(
        "notificationDataStorage"
      );
      if (notificationDataStorage) {
        setNotificationData(JSON.parse(notificationDataStorage));
        return;
      }

      setNotificationData(dummyNotification);
    }
  }, [notificationData]);

  return {
    notificationData,
  };
};

export const addNotificationData = (
  newNotificationDataList: Notification[],
  existingNotificationDataList: Notification[]
) => {
  const updatedNotificationDataList = [
    ...newNotificationDataList,
    ...existingNotificationDataList,
  ];

  localStorage.setItem(
    "notificationDataStorage",
    JSON.stringify(updatedNotificationDataList)
  );
  return updatedNotificationDataList;
};

// TODO: pake ini
export const setReadNotification = (
  notificationId: string,
  existingNotificationDataList: Notification[]
) => {
  const updatedNotificationDataList = existingNotificationDataList!.map(
    (notification) => {
      if (notification.id === notificationId) {
        notification.isRead = true;
      }
      return notification;
    }
  );

  localStorage.setItem(
    "notificationDataStorage",
    JSON.stringify(updatedNotificationDataList)
  );
  return updatedNotificationDataList;
};
