import { SET_FILTER } from "./actions";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
