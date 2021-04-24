import "./style.scss";

import { Detail } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobService from "services/job";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    JobService.getByID(id).then((data) => setJob(data));
  }, [id]);
  return (
    <div className="job-detail">
      <Detail className="job-detail__detail" job={job} />
    </div>
  );
};

export default JobDetail;
