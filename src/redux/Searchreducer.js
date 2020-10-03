import * as ActionTypes from "./ActionTypes";

const Results = (
  state = { isLoading: false, errMessage: null, results: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.RESULTS_LOADING:
      return { ...state, isLoading: true, errMessage: null, results: [] };

    case ActionTypes.ADD_RESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

    case ActionTypes.RESULTS_FAILED:
      return {
        ...state,
        isLoading: true,
        errMessage: action.payload,
        results: [],
      };
    default:
      return { ...state, isLoading: false, errMessage: null, results: [] };
  }
};

export default Results;
