import "./style.scss";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <div className="job-item__title">
        <div className="job-item__name">
          <Link className="job-item__text" to={`/jobs/${job.id}`}>
            {job.name}
          </Link>
          <span className="job-item__category">{job.category}</span>
        </div>
        <button className="job-item__bookmark">
          <FaRegBookmark></FaRegBookmark>
        </button>
      </div>
      <div className="job-item__checkout">
        <div className="checkout__title">
          Toàn Quốc | Việc KD và marketing khác |{" "}
          {job.expect_balance.join(" - ")}
        </div>
        <div className="checkout__expired">Hạn nhận hồ sơ: 21 ngày 16 giờ</div>
      </div>
      <div className="job-item__text job-item__overview">{job.overview}</div>
    </div>
  );
};

export default JobItem;
