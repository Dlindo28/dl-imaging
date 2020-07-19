import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  image: imageReducer,
  page: pageReducer,
});
