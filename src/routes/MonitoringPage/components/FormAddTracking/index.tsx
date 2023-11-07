import FormTextField from "../FormTextField";

const FormAddTracking = () => {
  return (
    <div className="flex flex-col gap-6">
      <FormTextField title="Jenis Aktivitas Fisik" />
      <FormTextField title="Waktu Mulai" />
      <FormTextField title="Waktu Selesai" />

      <button className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6">
        Simpan
      </button>
    </div>
  );
};

export default FormAddTracking;
