import { useNavigate } from "react-router-dom";

export type NewsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  route: string;
};

const NewsCard = (props: NewsCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row justify-between my-2 mx-2"
      onClick={() => {
        navigate(props.route);
      }}
    >
      <div className="w-3/4">
        <h1
          style={{
            fontWeight: 700,
            fontSize: "12px",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            fontWeight: 400,
            fontSize: "10px",
          }}
        >
          {props.description}
        </p>
      </div>
      <div className="w-1/4 flex justify-center items-center ">
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "4px",
            background: `url(${props.imageUrl})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NewsCard;
