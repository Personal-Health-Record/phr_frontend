import { useState } from "react";
import CardNotification from "./components/CardNotification";
import SearchBar from "./components/Searchbar";
import { Notification } from "./constants";
import { useGetNotificationData } from "../../helpers/notificationDataHelper";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import BottomNavbar from "../../components/BottomNavbar";
import CircleLoader from "../../components/CircleLoader";

const NotificationPage = () => {
  const [notificationData, setNotificationData] = useState<Notification[]>();
  let { notificationData: storageNotificationData } = useGetNotificationData();
  const { loggedInUser } = useGetLoggedInUser();
  if (!storageNotificationData || !loggedInUser) {
    return <CircleLoader />;
  }

  if (!notificationData) {
    setNotificationData(
      storageNotificationData.filter(
        (notification) => notification.toUserId === loggedInUser.id
      )
    );
  }

  const handleSearch = (keyword: string) => {
    const newNotificationData = storageNotificationData!.filter(
      (notification) =>
        notification.toUserId === loggedInUser.id &&
        notification.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNotificationData(newNotificationData);
  };

  return (
    <div className="flex flex-col px-4">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col mt-10">
        {notificationData &&
          notificationData.map((notification) => (
            <CardNotification
              key={notification.id}
              notification={notification}
              notificationList={storageNotificationData!}
            />
          ))}
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NotificationPage;
