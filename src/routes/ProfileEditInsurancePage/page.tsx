import Header from "../../components/Header";
import AddInsuranceForm from "../ProfilePage/components/AddInsuranceForm";

const AddInsurancePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tambah Asuransi" />
      <div className="flex flex-col px-4 gap-6">
        <AddInsuranceForm />
      </div>
    </div>
  );
};

export default AddInsurancePage;
