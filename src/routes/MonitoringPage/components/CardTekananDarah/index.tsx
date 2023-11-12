const CardTekananDarah = () => {
  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <p>Tekanan Darah</p>
      <div className="flex items-end gap-5 mt-3">
        <div className="flex gap-4">
          <div>
            <p className="text-xs text-lightGrey">SYSTOLE</p>
            <p className="text-xs text-mainGrey">mmHg</p>
          </div>
          <p className="text-xl text-mainBlue">120</p>
        </div>

        <div className="flex gap-4">
          <div>
            <p className="text-xs text-lightGrey">DIASTOLE</p>
            <p className="text-xs text-mainGrey">mmHg</p>
          </div>
          <p className="text-xl text-mainGreen">80</p>
        </div>
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

export default CardTekananDarah;
