import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import Header from "../../../components/Header";
import DetailInfoCard from "../components/DetailInfoCard";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import CircleLoader from "../../../components/CircleLoader";
import { useGetTenagaKesehatanList } from "../../../helpers/tenagaKesehatanHelper";
import imageEdit from "../../../assets/images/edit.png";

const ProfileDoctorDetail = () => {
  const { userData, loggedInUser } = useGetLoggedInUser();
  const { listTenkes } = useGetTenagaKesehatanList();

  if (!userData || !loggedInUser || !listTenkes) {
    return <CircleLoader />;
  }

  const tenkes = listTenkes.find(
    (tenkes) => tenkes.userId === loggedInUser.id)!;


  return (
    <div className="flex flex-col">
      <Header title="Profil Saya" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold">Informasi Umum</h3>
        <DetailInfoCard title={"Nomor SIP"} data={tenkes.sip.toString()} />
        <DetailInfoCard title={"Spesialis"} data={tenkes.specialist} />
        <DetailInfoCard title={"Pengalaman Kerja"} data={tenkes.yoe.toString() + " tahun"} />
        <DetailInfoCard title={"Alumnus"} data={tenkes.almamater} />
        <DetailInfoCard title={"Tempat Praktik"} data={tenkes.practiceLocation.name} />
      </div>

      <BottomNavbarOneButton
        path="/tenaga/edit"
        iconPath={imageEdit}
        text="Edit profile"
      />
    </div>
  );
};

export default ProfileDoctorDetail;
