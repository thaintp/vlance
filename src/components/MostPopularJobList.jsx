import "./style.scss";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { JobList } from "components";
import JobService from "services/job";

const MostPopularJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  useEffect(() => {
    JobService.get().then((data) => {
      setJobs(data?.data.slice(-3))
      setTotalJobs(data?.data.length);
    });
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
            Xem tất cả <strong>{totalJobs}</strong> công việc
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MostPopularJobList;
