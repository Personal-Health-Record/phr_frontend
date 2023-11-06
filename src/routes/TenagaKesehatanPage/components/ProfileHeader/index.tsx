interface Props {
  specialist: string;
  yoe: number;
}

const ProfileHeader = ({ specialist, yoe }: Props) => {
  return (
    <div className="flex border-b-4 border-t-2 py-3 justify-evenly">
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">SPECIALIS</p>
        <p className="text-sm">{specialist}</p>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">PENGALAMAN KERJA</p>
        <p className="text-sm">{yoe} Tahun</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
