import { combineReducers } from "redux";

// Import module reducers
import alert from "./alert";
import auth from "./auth";

export default combineReducers({
  alert,
  auth
});
