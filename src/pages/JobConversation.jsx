import "./style.scss";
import { TabBar, EmployerJobItems } from "components";
import { useState } from "react";
import { map_status } from "utils/status";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Conversation } from "components";

const JobConversation = () => {
  const { role } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? (
    <div className="job-manager not-fluid">
      <div className="job-manager__title">Thảo luận dự án</div>
      <Conversation />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default JobConversation;
