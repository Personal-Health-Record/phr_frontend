import sertifikatVaksin from "../../../../assets/images/sertifikat-vaksin.png";

const CardVaksin = () => {
  return (
    <div className="flex flex-col gap-1 border-b-2 py-3 mb-20">
      <p className="text-sm">Sertifikasi Vaksinasi</p>
      <img src={sertifikatVaksin} alt="" width={350} height={350} />
    </div>
  );
};

export default CardVaksin;
