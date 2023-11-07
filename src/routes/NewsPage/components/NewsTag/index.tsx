export type NewsTagProps = {
  tagName?: string;
  isActive?: boolean;
  handleClick: () => void;
};

const NewsTag = (props: NewsTagProps) => {
  return (
    <div
      className="py-1 px-3"
      onClick={props.handleClick}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        borderRadius: "20px",
        background: props.isActive ? "#2CA3FA" : "#F5F5F5",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: "400",
          color: props.isActive ? "white" : "#5F5F5F",
        }}
      >
        {props.tagName}
      </p>
    </div>
  );
};

export default NewsTag;
