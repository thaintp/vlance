import { LOADING, LOADED } from "actions/types";

const loadingReducer = (state = false, action) => {
  const { type } = action;

  console.log(type);

  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return false;
  }
};

export default loadingReducer;
