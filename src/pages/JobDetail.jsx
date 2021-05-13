import "./style.scss";

import { Detail, OfferForm, OfferList } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobService from "services/job";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    JobService.getByID(parseInt(id)).then((data) => setJob(data));
  }, [id]);
  return (
    <div className="job-detail not-fluid">
      <Detail className="job-detail__detail" job={job} />
      <OfferForm></OfferForm>
      <OfferList />
    </div>
  );
};

export default JobDetail;
