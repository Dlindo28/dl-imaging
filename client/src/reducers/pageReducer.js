import { SET_PAGE } from "../actions/actions";

const initialState = {
  activePage: "Home",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}
