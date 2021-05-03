import "./style.scss";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { JobList } from "components";
import JobService from "services/job";

const MostPopularJobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    JobService.getAll().then((data) => setJobs(data));
  }, []);

  return (
    <>
      <h2 className="most-popular-job-list__title">
        Các công việc được quan tâm nhất
      </h2>

      <div className="most-popular-job-list__job-list">
        <JobList jobs={jobs}></JobList>
      </div>

      <div className="most-popular-job-list__all-jobs-btn">
        <Link to="/jobs">
          <Button>
            Xem tất cả <strong>{50010}</strong> công việc
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MostPopularJobList;
