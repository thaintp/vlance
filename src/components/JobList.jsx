import "./style.scss";
import { JobItem } from "components";

const JobList = ({ jobs }) => {
  return (
    <div className="jobs-list">
      {jobs?.map((job) => (
        <div className="jobs-list__col5" key={job.id}>
          <JobItem job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
