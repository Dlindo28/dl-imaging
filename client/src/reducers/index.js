import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import pageReducer from "./pageReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  image: imageReducer,
  page: pageReducer,
  filter: filterReducer,
});
