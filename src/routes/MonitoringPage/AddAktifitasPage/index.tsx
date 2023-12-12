import Header from "../../../components/Header";
import FormAddTracking from "../components/FormAddTracking";

const AddAktifitas = () => {
  return (
    <div className="flex flex-col">
      <Header title="Aktivitas Fisik " />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">Add Aktifitas</h3>

        <FormAddTracking />
      </div>
    </div>
  );
};

export default AddAktifitas;
