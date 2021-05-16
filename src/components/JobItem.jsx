import "./style.scss";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import jobType from "utils/jobType";
import { truncate } from "utils/string";
const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <div className="job-item__title">
        <div className="job-item__name">
          <Link className="job-item__text" to={`/jobs/${job.id}`}>
            {job.title}
          </Link>
          <span className="job-item__category">
            {jobType[job.job_type ?? 0]}
          </span>
        </div>
        <button className="job-item__bookmark">
          <FaRegBookmark></FaRegBookmark>
        </button>
      </div>
      <Link className="job-item__text" to={`/users/${job.employer?.id}`}>
        {job.employer?.name}
      </Link>
      <div className="job-item__checkout">
        <div className="checkout__title">
          Toàn Quốc | {job.category?.name} | {job.expect_balance}
        </div>
        <div className="checkout__expired">Hạn nhận hồ sơ: 21 ngày 16 giờ</div>
      </div>
      <div className="jjob-item__overview">
        {truncate(job.description, 250)}
        {"..."}
      </div>
    </div>
  );
};

export default JobItem;
