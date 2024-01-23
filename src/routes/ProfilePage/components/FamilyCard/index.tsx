import { useNavigate } from "react-router-dom";
import { User } from "../../../../helpers/constants";
import circleCross from "../../../../assets/images/circle_cross.png";

interface Props {
  user: User;
  onClickDelete: () => void;
}
const FamilyCard = ({ user, onClickDelete }: Props) => {
  const navigate = useNavigate();

  const goToEditFamily = () => {
    navigate(`/profile/edit/family/${user.id}`);
  }

  return (
    <div className="flex flex-row gap-1 border-b items-center py-2"
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          background: `url(${user.profilePicture})`,
          backgroundSize: "cover",
          marginRight: 16,
        }}
        onClick={goToEditFamily}
      />
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}>
        <div
          onClick={goToEditFamily}
        >
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
        <div style={{
          marginRight: 16,
        }}
          onClick={onClickDelete}
        >
          <img src={circleCross} alt="check" width="20px" height="20px" />
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;
