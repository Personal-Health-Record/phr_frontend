import { useNavigate } from "react-router-dom";
import { setReadNotification } from "../../../../helpers/notificationDataHelper";
import { Notification } from "../../constants";
import notificationOpen from "../../../../assets/images/notification-open.png";
import notificationImg from "../../../../assets/images/notification.png";
import { formatDate } from "../../../../helpers/dateHelper";

interface Props {
  notification: Notification;
  notificationList: Notification[];
}

const CardNotification = ({ notification, notificationList }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-3"
      style={{
        backgroundColor: notification.isRead
          ? "rgba(245, 245, 245, 0.60)"
          : "#FFFFFF",
        padding: "10px 15px",
        borderBottom: "1px solid #E5E5E5",
      }}
      onClick={() => {
        setReadNotification(notification.id, notificationList);
        navigate(notification.link);
      }}
    >
      <div>
        <img
          src={notification.isRead ? notificationOpen : notificationImg}
          alt="notification-icon"
          width={60}
          height={60}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <p className="text-xs font-bold text-mainGrey">
            {notification.title}
          </p>
          <p className="text-xs text-lightGrey">
            {formatDate(notification.date)}
          </p>
        </div>

        <div className="text-xs">{notification.body}</div>
      </div>
    </div>
  );
};

export default CardNotification;
