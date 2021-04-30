import "./style.scss";
import Table from "react-bootstrap/Table";
import { EmployerJobItem } from "components";
import { useState, useEffect } from "react";
import JobService from "services/job";

const EmployerJobItems = ({ tab }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    JobService.getByState(tab).then((data) => setJobs(data));
  }, [tab]);

  return (
    <div className="employer-job-items">
      <Table striped borderless hover>
        <thead>
          <tr>
            <th className="employer-job-items__title">ID</th>
            <th className="employer-job-items__title">TIÊU ĐỀ</th>
            <th className="employer-job-items__title">DANH MỤC</th>
            <th className="employer-job-items__title">GIÁ</th>
            <th className="employer-job-items__title">SỐ NGÀY DỰ KIẾN</th>
          </tr>
        </thead>
        <tbody>
          {jobs?.map((job, index) => (
            <EmployerJobItem job={job} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default EmployerJobItems;
