import "./style.scss";
import { TabBar, EmployerJobItems } from "components";
import { useState } from "react";
import { map_status } from "utils/status";
import { useParams, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const JobManager = () => {
  const { role } = useParams();
  const [tab, setTab] = useState(Object.keys(map_status)[0]);
  const { isLoggedIn } = useSelector(state => state.auth)

  return (
    isLoggedIn ?
    <div className="job-manager not-fluid">
      <div className="job-manager__title">QUẢN LÝ CÔNG VIỆC</div>
      <TabBar tab={tab} setTab={setTab} />
      <EmployerJobItems tab={tab} role={role}/>
    </div>
    :
    <Redirect to="/" />
  );
};

export default JobManager;
