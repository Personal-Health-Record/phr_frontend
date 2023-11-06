interface Props {
  age: string;
  gender: string;
}

const ProfileHeader = ({ age, gender }: Props) => {
  return (
    <div className="flex border-b-4 border-t-2 py-3 justify-evenly">
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">Usia</p>
        <p className="text-sm">{age} tahun</p>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">Jenis Kelamin</p>
        <p className="text-sm">{gender}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
