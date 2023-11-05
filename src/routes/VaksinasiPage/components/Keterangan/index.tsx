const Keterangan = () => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <h3 className="font-semibold">Keterangan</h3>

      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div
            className="bg-mainBlue w-6 h-6 rounded-md shadow-md"
            style={{
              backgroundColor: "#9FDBFD",
            }}
          />
          <p className="text-xs text-mainGrey">Sudah lengkap</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-superLightGrey w-6 h-6 rounded-md shadow-md" />
          <p className="text-xs text-mainGrey">Belum lengkap/belum vaksin</p>
        </div>
      </div>
    </div>
  );
};

export default Keterangan;
