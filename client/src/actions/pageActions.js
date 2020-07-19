import { SET_PAGE } from "./actions";

export const setPage = (newPage) => {
  return {
    type: SET_PAGE,
    payload: newPage,
  };
};
