import Header from "../../../components/Header";
import FormUpsertRiwayatAlergi from "../components/FormUpsertRiwayatAlergi";

const TambahRiwayatAlergi = () => {
  return (
    <div className="flex flex-col">
      <Header title="Riwayat Obat" />

      <div className="flex flex-col w-full py-4 gap-3">
        <h3 className="font-semibold text-mainGrey mb-3 px-4">
          Tambah Riwayat Alergi
        </h3>

        <FormUpsertRiwayatAlergi />
      </div>
    </div>
  );
};

export default TambahRiwayatAlergi;
