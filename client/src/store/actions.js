import { axiosInstance } from "../helpers/axiosInstance";

export function fetchDukcapils() {
  return async (dispatch, getState) => {
    try {
      const response = axiosInstance({
        url: "/dukcapil/",
        method: "GET",
      });

      dispatch({
        type: "set_dukcapils",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchReligions() {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: "/religions/",
        method: "GET",
      });

      dispatch({
        type: "set_religions",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMaritalStatus() {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: "/maritalStatus/",
        method: "GET",
      });

      dispatch({
        type: "set_marital_status",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
