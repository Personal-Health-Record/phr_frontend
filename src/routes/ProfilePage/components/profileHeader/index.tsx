import { User } from "../../../../helpers/constants";

interface Props {
  user: User;
}

const ProfileHeader = ({ user }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div
        style={{
          width: 86,
          height: 86,
          borderRadius: 86,
          background: `url(${user.profilePicture})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          color: "#5F5F5F",
          textAlign: "center",
          fontSize: 18,
          fontWeight: 600,
          marginTop: 10,
        }}
      >
        {user.name}
      </div>
      <div
        style={{
          color: "#949494",
          textAlign: "center",
          fontSize: 14,
          fontWeight: 400,
          marginTop: 5,
        }}
      >
        {user.phoneNumber}
      </div>
      <div
        style={{
          color: "#9A9A9A",
          textAlign: "center",
          fontSize: 14,
          fontWeight: 400,
          marginTop: 5,
        }}
      >
        {user.email}
      </div>
    </div>
  );
};

export default ProfileHeader;
