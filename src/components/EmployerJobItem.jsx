import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Status } from "components";
import { Link } from "react-router-dom";

const EmployerJobItem = ({ job }) => {
  return (
    <tr className="employer-job-item">
      <td>{job.id}</td>
      <td>
        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
      </td>
      <td>{job.expect_balance}</td>
      <td>{job.expect_day}</td>
      <td>
        <Status status={job.state} />
      </td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Hành động
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {}} className="dropdown-item">
              <span
                className="color__item m-0"
                style={{
                  backgroundColor: "#82bf11",
                  width: "10px",
                  height: "10px",
                }}
              ></span>{" "}
              Đánh dấu hoàn thành
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {}} className="dropdown-item">
              <span
                className="color__item m-0"
                style={{
                  backgroundColor: "#f05d62",
                  width: "10px",
                  height: "10px",
                }}
              ></span>{" "}
              Đánh dấu hủy bỏ
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};
export default EmployerJobItem;
