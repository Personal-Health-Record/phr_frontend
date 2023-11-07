import { useLocation } from "react-router-dom";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import { useEffect, useState } from "react";
import {
  TenagaKesehatanUser,
  getTenkesBySIP,
} from "../../../helpers/tenagaKesehatanHelper";
import Header from "../../HomePage/components/Header";
import ProfileHeader from "../components/ProfileHeader";
import CardTenkesDetail from "../components/CardTenkesDetail";
import CardTempatPraktik from "../components/CardTempatPraktik";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import imageEdit from "../../../assets/images/edit.png";

const ProfileTenagaMedis = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { userData, loggedInUser } = useGetLoggedInUser();
  const [dataTenkes, setDataTenkes] = useState<TenagaKesehatanUser>();
  const sip = searchParams.get("sip");
  const data = getTenkesBySIP(parseInt(sip || ""));

  useEffect(() => {
    setDataTenkes(data as TenagaKesehatanUser);
  }, [data]);

  if (!userData || !loggedInUser || !dataTenkes) {
    return <div> Loading... </div>;
  }

  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-3 pt-6 ">
        <div className="self-center">
          <img
            src={dataTenkes.profilePicture || ""}
            alt="doctor"
            width={80}
            height={80}
          />
        </div>

        <p className="font-semibold text-mainGrey self-center">
          {dataTenkes.name}
        </p>

        <ProfileHeader
          specialist={dataTenkes.specialist || ""}
          yoe={dataTenkes.yoe || 0}
        />
        <CardTenkesDetail
          data={dataTenkes.sip.toString() || ""}
          title="Nomor SIP"
        />
        <CardTenkesDetail data={dataTenkes.almamater || ""} title="Alumnus" />

        <CardTempatPraktik
          name={dataTenkes.practiceLocation.name || ""}
          id={dataTenkes.practiceLocation.id || 0}
        />
      </div>
      {loggedInUser.id === dataTenkes.userId && (
        <BottomNavbarOneButton
          path="/tenaga/edit"
          iconPath={imageEdit}
          text="Edit profile"
        />
      )}
    </div>
  );
};

export default ProfileTenagaMedis;
