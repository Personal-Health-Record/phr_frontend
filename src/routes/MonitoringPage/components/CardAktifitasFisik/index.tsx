const CardAktifitasFisik = () => {
  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <p>Aktifitas Fisik</p>
      <div className="flex items-end gap-2 mt-3">
        <p className="text-mainBlue text-3xl">15</p>
        <p className="text-lightGrey">menit/hari</p>
      </div>
      <div className="bg-slate-200 mt-3" style={{ height: "1px" }} />

      <div className="flex flex-col">
        <div className="flex gap-1 mt-3">
          <p className="text-xs text-lightGrey">Jumlah target tercapai: </p>
          <p className="font-bold text-xs text-lightGrey">10 hari</p>
        </div>
        <div className="flex gap-1 mt-2">
          <p className="text-xs text-lightGrey">Total durasi: </p>
          <p className="font-bold text-xs text-lightGrey">350 menit</p>
        </div>
      </div>
    </div>
  );
};

export default CardAktifitasFisik;
