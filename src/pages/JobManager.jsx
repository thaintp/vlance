import "./style.scss";
import { EmployerJobItems } from "components";

const JobManager = () => {
  return (
    <div className="job-manager">
      <div className="job-manager__title">QUẢN LÝ CÔNG VIỆC</div>
      <EmployerJobItems />
    </div>
  );
};

export default JobManager;
