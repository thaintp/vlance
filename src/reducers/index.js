import { combineReducers } from "redux";

import jobs from "./jobs";
import auth from "./auth";
import loading from "./loading";
import message from "./message";
import modal from "./modal";

export default combineReducers({
  jobs,
  auth,
  loading,
  message,
  modal,
});
