import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/sports_reducer";
import { sports_url as url } from "../utils/constants";
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

const initialState = {
  isSidebarOpen: false,
  sports_loading: false,
  sports_error: false,
  sports: [],
  featured_sports: [],
  single_sport_loading: false,
  single_sport_error: false,
  single_sport: {},
};

const SportsContext = React.createContext();

export const SportsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchSports = async (url) => {
    dispatch({ type: GET_SPORTS_BEGIN });
    try {
      const response = await axios.get(url);
      const sports = response.data;
      dispatch({ type: GET_SPORTS_SUCCESS, payload: sports });
    } catch (error) {
      dispatch({ type: GET_SPORTS_ERROR });
    }
  };

  /* --- This method will be handy when there is server-side filtering --- */
  // const fetchSingleSport = async (url) => {
  //   dispatch({ type: GET_SINGLE_SPORT_BEGIN });
  //   try {
  //     const response = await axios.get(url);
  //     const singleSport = response.data;
  //     dispatch({ type: GET_SINGLE_SPORT_SUCCESS, payload: singleSport });
  //   } catch (error) {
  //     dispatch({ type: GET_SINGLE_SPORT_ERROR });
  //   }
  // };

  /* --- For now we will use this method for client-side filtering --- */
  const fetchSingleSport = async (url, id) => {
    dispatch({ type: GET_SINGLE_SPORT_BEGIN });
    try {
      const response = await axios.get(url);
      const allSports = response.data;

      const singleSport = allSports.find((sport) => sport.id === id);

      if (singleSport) {
        dispatch({ type: GET_SINGLE_SPORT_SUCCESS, payload: singleSport });
      } else {
        dispatch({ type: GET_SINGLE_SPORT_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_SPORT_ERROR });
    }
  };

  useEffect(() => {
    fetchSports(url);
  }, []);

  return (
    <SportsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleSport }}
    >
      {children}
    </SportsContext.Provider>
  );
};
// make sure use
export const useSportsContext = () => {
  return useContext(SportsContext);
};
