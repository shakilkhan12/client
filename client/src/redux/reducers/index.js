import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import loginReducer from "./authReducer";

const reducers = combineReducers({
    allactivities: activityReducer,
    loginReducer
  });
  export default reducers;