import { useNavigate } from "react-router-dom";

type InsuranceCardProps = {
  id: string;
  title: string;
  cardNumber: string;
  isActive: string;
};

const InsuranceCard = ({ id, title, cardNumber, isActive }: InsuranceCardProps) => {
  const navigate = useNavigate();

  const goToEditInsurance = () => {
    navigate(`/profile/edit/insurance/${id}`);
  }

  return (
    <div className="flex flex-row rounded-md shadow-md py-4 px-7 justify-between"
      onClick={goToEditInsurance}
    >
      <div>
        <p
          style={{
            color: "#5F5F5F",
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: "#9A9A9A",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          {cardNumber}
        </p>
      </div>
      <div>
        <p
          style={{
            color: "#5F5F5F",
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          {isActive}
        </p>
      </div>
    </div>
  );
};

export default InsuranceCard;
