import CircleLoader from "../../../components/CircleLoader";
import Header from "../../../components/Header";
import { deleteUserDataByUserId, useGetLoggedInUser } from "../../../helpers/userDataHelper";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import FamilyCard from "../components/FamilyCard";
import imagePlus from "../../../assets/images/plus.png";
import { User } from "../../../helpers/constants";
import NegativeModal from "../../../components/NegativeModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FamilyPage = () => {
  const { loggedInUser: user, userData } = useGetLoggedInUser();

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string>()

  if (!user || !userData) {
    return <CircleLoader />;
  }

  const userRelations = userData.filter((item) => item.parentId === user.id);

  const onClickDelete = (user: User)  => {
    setSelectedUserId(user.id);
    setShowDeleteModal(true);
  }

  const onConfirmDelete = ()  => {
    deleteUserDataByUserId(selectedUserId!);
    setShowDeleteModal(false);
    
    window.location.reload();
  }

  return (
    <div className="flex flex-col">
      <Header title="Anggota Keluarga" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {userRelations.map((user, index) => (
          <FamilyCard key={index} user={user} onClickDelete={() => {
            onClickDelete(user);
          }}/>
        ))}
      </div>

      <BottomNavbarOneButton
        path="/profile/add/family"
        iconPath={imagePlus}
        text="Tambahkan Anggota Keluarga"
      />
      <NegativeModal
        description="Apakah anda yakin ingin menghapus data ini?"
        onClose={() => setShowDeleteModal(false)}
        onSubmit={onConfirmDelete}
        show={showDeleteModal}
      />
    </div>
  );
};

export default FamilyPage;
