import Header from "../../../components/Header";
import EditFamilyForm from "../components/EditFamilyForm";

const EditFamilyPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Edit Anggota Keluarga" />
      <div className="flex flex-col px-4 gap-6">
        <EditFamilyForm />
      </div>
    </div>
  );
};

export default EditFamilyPage;
