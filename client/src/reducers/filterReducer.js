import { SET_FILTER } from "../actions/actions";

const initialState = {
  filter: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
