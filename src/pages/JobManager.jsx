import "./style.scss";
import { TabBar, EmployerJobItems } from "components";
import { useState } from "react";
import { map_status } from "utils/status";

const JobManager = () => {
  const [tab, setTab] = useState(Object.keys(map_status)[0]);

  return (
    <div className="job-manager">
      <div className="job-manager__title">QUẢN LÝ CÔNG VIỆC</div>
      <TabBar tab={tab} setTab={setTab} />
      <EmployerJobItems tab={tab} />
    </div>
  );
};

export default JobManager;
