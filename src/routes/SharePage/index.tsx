import { useLocation, useNavigate } from "react-router-dom";
import {
  addNotificationData,
  useGetNotificationData,
} from "../../helpers/notificationDataHelper";
import { useState } from "react";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import { useGetTenagaKesehatanList } from "../../helpers/tenagaKesehatanHelper";
import { Notification } from "../NotificationsPage/constants";
import Header from "../HomePage/components/Header";
import SearchBar from "./components/SearchBar";
import Title from "../HomePage/components/Title";
import CardTenkes from "./components/CardTenkes";
import ButtonSection from "./components/ButtonSection";
import CircleLoader from "../../components/CircleLoader";
import { useToaster } from "../../contexts/ToasterContext";

const SharePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const body = searchParams.get("body");
  const link = searchParams.get("link");

  const [listSelectedDoctor, setListSelectedDoctor] = useState<string[]>([]);
  let { notificationData } = useGetNotificationData();
  let { loggedInUser, userData } = useGetLoggedInUser();
  const { listTenkes } = useGetTenagaKesehatanList();
  const { toggleDiv } = useToaster();
  if (!loggedInUser || !userData || !notificationData || !listTenkes) {
    return <CircleLoader />;
  }
  // filter only doctor
  userData = userData.filter((user) => user.role === "doctor");

  const handleSelectDoctor = (doctorId: string) => {
    if (listSelectedDoctor.includes(doctorId)) {
      setListSelectedDoctor(listSelectedDoctor.filter((id) => id !== doctorId));
      return;
    }

    setListSelectedDoctor([...listSelectedDoctor, doctorId]);
  };

  const handleKirimData = () => {
    if (listSelectedDoctor.length === 0) {
      toggleDiv("error", "Harap pilih tenaga kesehatan terlebih dahulu");
      return;
    }

    const newNotificationDataList = [];
    for (let i = 0; i < listSelectedDoctor.length; i++) {
      const doctorId = listSelectedDoctor[i];
      const newNotification: Notification = {
        id: (notificationData!.length + i + 1).toString(),
        fromUserId: loggedInUser!.id,
        toUserId: doctorId,
        title: title!,
        body: body!,
        date: new Date().toISOString().split("T")[0],
        isRead: false,
        link: link!,
      };
      newNotificationDataList.push(newNotification);
    }

    addNotificationData(newNotificationDataList, notificationData!);
    toggleDiv("success", "Data berhasil dikirim");
    navigate("/");
  };

  const handleKirimEmail = () => {
    const emailList = [];
    const newNotificationDataList = [];
    for (let i = 0; i < listTenkes.length; i++) {
      const tenkes = listTenkes[i];
      const doctor = userData!.find((user) => user.id === tenkes.userId);

      const newNotification: Notification = {
        id: (notificationData!.length + i + 1).toString(),
        fromUserId: loggedInUser!.id,
        toUserId: doctor!.id,
        title: title!,
        body: body!,
        date: new Date().toISOString().split("T")[0],
        isRead: false,
        link: link!,
      };
      newNotificationDataList.push(newNotification);
      emailList.push(doctor!.email);
    }

    document.location =
      "mailto:" + emailList.join(',') + "?subject=" + title + "&body=" + body;

    addNotificationData(newNotificationDataList, notificationData!);
    toggleDiv("success", "Data berhasil dikirim");
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <Header title="Bagikan ke" />

      <div className="flex flex-col py-3 px-4 pt-6 gap-4">
        <SearchBar />
        <Title text="Tenaga Kesehatan Anda" />

        {listTenkes.map((tenkes, index) => (
          <CardTenkes
            key={index}
            image={tenkes.profilePicture}
            name={tenkes.name}
            specialist={tenkes.specialist!}
            handleSelectDoctor={() => handleSelectDoctor(tenkes.userId)}
          />
        ))}

        <ButtonSection
          handleKirimData={handleKirimData}
          handleKirimEmail={handleKirimEmail}
        />
      </div>
    </div>
  );
};

export default SharePage;
