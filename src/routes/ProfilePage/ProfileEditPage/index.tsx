import Header from "../../../components/Header";
import EditProfileForm from "../components/EditProfileForm";

const EditProfilePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Update Profile" />
      <div className="flex flex-col px-4 gap-6">
        <EditProfileForm />
      </div>
    </div>
  );
};

export default EditProfilePage;
