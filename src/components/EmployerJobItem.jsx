import "./style.scss";
import { Link } from "react-router-dom";

const EmployerJobItem = ({ job }) => {
  return (
    <tr className="employer-job-item">
      <td>{job.id}</td>
      <td>
        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
      </td>
      <td>{job.category.name}</td>
      <td>{job.expect_balance}</td>
      <td>{job.expect_day}</td>
    </tr>
  );
};
export default EmployerJobItem;
