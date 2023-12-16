import Header from "../../../components/Header";
import FormEditPengingat from "../components/FormEditPengingat";

const EditPengingat = () => {
  return (
    <div className="flex flex-col">
      <Header title="Pengingat Obat" />

      <div className="flex flex-col w-full py-4 gap-3">
        <h3 className="font-semibold text-mainGrey mb-3 px-4">
          Informasi Obat
        </h3>

        <FormEditPengingat />
      </div>
    </div>
  );
};

export default EditPengingat;
