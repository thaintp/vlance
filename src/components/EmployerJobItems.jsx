import "./style.scss";
import Table from "react-bootstrap/Table";
import { EmployerJobItem } from "components";
import { useState, useEffect } from "react";
import JobService from "services/job";
import { useSelector } from 'react-redux'

const EmployerJobItems = ({ tab, role }) => {
  const [jobs, setJobs] = useState([]);
  const { account } = useSelector(state => state.auth);
  useEffect(() => {
    if (role === "employer") {
      JobService.get({ employer_id: account.id, status: tab }).then((data) => setJobs(data.data));
    } else {
      JobService.get({ freelancer_id: account.id, status: tab }).then((data) => setJobs(data.data));
    }
  }, [tab, role, account]);

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
