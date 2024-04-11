import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_SPORTS_BEGIN,
  GET_SPORTS_SUCCESS,
  GET_SPORTS_ERROR,
  GET_SINGLE_SPORT_BEGIN,
  GET_SINGLE_SPORT_SUCCESS,
  GET_SINGLE_SPORT_ERROR,
} from "../actions";

const sports_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_SPORTS_BEGIN) {
    return { ...state, sports_loading: true };
  }
  if (action.type === GET_SPORTS_SUCCESS) {
    const featured_sports = action.payload.filter(
      (sport) => sport.featured === true,
    );
    return {
      ...state,
      sports_loading: false,
      sports: action.payload,
      featured_sports,
    };
  }
  if (action.type === GET_SPORTS_ERROR) {
    return { ...state, sports_loading: false, sports_error: true };
  }
  if (action.type === GET_SINGLE_SPORT_BEGIN) {
    return {
      ...state,
      single_sport_loading: true,
      single_sport_error: false,
    };
  }
  if (action.type === GET_SINGLE_SPORT_SUCCESS) {
    return {
      ...state,
      single_sport_loading: false,
      single_sport: action.payload,
    };
  }
  if (action.type === GET_SINGLE_SPORT_ERROR) {
    return {
      ...state,
      single_sport_loading: false,
      single_sport_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sports_reducer;
