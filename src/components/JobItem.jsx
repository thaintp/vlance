import "./style.scss";
import { Link } from "react-router-dom";

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <Link className="job-item__text job-item__name" to={`/jobs/${job.id}`}>
        {job.name}
      </Link>
      <div className="job-item__text job-item__price">
        {job.expect_balance.join(" - ")}
      </div>
      <div className="job-item__text job-item__price">{job.overview}</div>
    </div>
  );
};

export default JobItem;
