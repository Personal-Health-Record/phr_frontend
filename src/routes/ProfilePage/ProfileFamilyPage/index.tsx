import CircleLoader from "../../../components/CircleLoader";
import Header from "../../../components/Header";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import FamilyCard from "../components/FamilyCard";

const FamilyPage = () => {
  const { loggedInUser: user, userData } = useGetLoggedInUser();

  if (!user || !userData) {
    return <CircleLoader />;
  }

  const userRelations = userData.filter((item) => item.parentId === user.id);

  return (
    <div className="flex flex-col">
      <Header title="Anggota Keluarga" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {userRelations.map((item, index) => (
          <FamilyCard key={index} user={item} />
        ))}
      </div>

      <BottomNavbarOneButton
        path="/profile/edit/family"
        iconPath="/images/plus.png"
        text="Tambahkan Anggota Keluarga"
      />
    </div>
  );
};

export default FamilyPage;
