import { User } from "../../../../helpers/constants";

interface Props {
  user: User;
}
const FamilyCard = ({ user }: Props) => {
  return (
    <div className="flex flex-row gap-1 border-b items-center py-2">
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          background: `url(${user.profilePicture})`,
          backgroundSize: "cover",
          marginRight: 16,
        }}
      />
      <div>
        <p
          style={{
            color: "#5F5F5F",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {user.name}
        </p>
        <p
          style={{
            color: "rgba(0, 0, 0, 0.50)",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          {user.relation}
        </p>
        <p
          style={{
            color: "#9A9A9A",
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          {user.age} tahun
        </p>
      </div>
    </div>
  );
};

export default FamilyCard;
