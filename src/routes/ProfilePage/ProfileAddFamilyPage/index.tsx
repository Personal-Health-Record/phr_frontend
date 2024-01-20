import Header from "../../../components/Header";
import AddFamilyForm from "../components/AddFamilyForm";

const AddFamilyPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tambah Anggota Keluarga" />
      <div className="flex flex-col px-4 gap-6">
        <AddFamilyForm />
      </div>
    </div>
  );
};

export default AddFamilyPage;
