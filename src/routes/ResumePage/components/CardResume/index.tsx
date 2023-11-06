import { useNavigate } from "react-router-dom";
import { Resume } from "../../models";
import { formatDate } from "../../../../helpers/dateHelper";
import arrowRight from "../../../../assets/images/arrow-right.png";

export type CardResumeProps = {
  resume: Resume;
};

const CardResume = ({ resume }: CardResumeProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/resume/details/${resume.id}`);
  };

  return (
    <div
      className="flex border-b-2 py-2 items-center justify-between"
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm">{formatDate(resume.date)}</p>
        <p className="text-sm text-mainGrey">{resume.location}</p>
      </div>

      <img src={arrowRight} alt="" width={30} height={30} />
    </div>
  );
};

export default CardResume;
