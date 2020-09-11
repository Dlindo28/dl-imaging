import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  page: pageReducer,
  filter: filterReducer,
});
