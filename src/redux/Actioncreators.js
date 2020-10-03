import * as ActionTypes from "./ActionTypes";
import movies from "../data/homeData";
let controller = new AbortController();
let signal = controller.signal;
export const fetchsearchResults = (searchInput) => (dispatch) => {
  dispatch(searchLoading());
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;

  setTimeout(() => {
    fetch(
      `http://www.omdbapi.com/?s=${searchInput.trim()}&apikey=ad9ee299&plot=short&page=1`,
      {
        signal: signal,
      }
    )
      .then((movies) => movies.json())
      .then((result) => {
        //console.log(result);
        dispatch(addSearch(result));
      })
      .catch((err) => {
        dispatch(FailedSearch(err));
      });
  }, 0);
};
export const searchLoading = () => ({
  type: ActionTypes.RESULTS_LOADING,
  payload: null,
});
export const addSearch = (payload) => ({
  type: ActionTypes.ADD_RESULTS,
  payload: payload,
});
export const FailedSearch = (payload) => ({
  type: ActionTypes.RESULTS_FAILED,
  payload: payload,
});

const fetchHomeResults = () => (dispatch) => {
  dispatch(searchHomeLoading());

  setTimeout(() => {
    dispatch(addHomeSearch(movies["Search"]));
  }, 7000);
};
export const searchHomeLoading = () => ({
  type: ActionTypes.HOMERESULTS_LOADING,
  payload: null,
});
export const addHomeSearch = (payload) => ({
  type: ActionTypes.ADD_HOMERESULTS,
  payload: payload,
});
export const FailedHomeSearch = (payload) => ({
  type: ActionTypes.HOMERESULTS_FAILED,
  payload: payload,
});

export default fetchHomeResults;
