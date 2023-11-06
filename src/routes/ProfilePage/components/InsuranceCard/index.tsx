type InsuranceCardProps = {
  title: string;
  cardNumber: string;
  isActive: string;
};

const InsuranceCard = ({ title, cardNumber, isActive }: InsuranceCardProps) => {
  return (
    <div className="flex flex-row rounded-md shadow-md py-4 px-7 justify-between">
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
