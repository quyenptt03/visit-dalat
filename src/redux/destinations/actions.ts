import { Dispatch } from "redux";
import { Action } from "./types";
import { fetchDestinations } from "../../api";

export const getAllDestinations = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "getAllDestinationsRequest",
    });
    const { data } = await fetchDestinations();
    dispatch({
      type: "getAllDestinationsSuccess",
      payload: data.destinations,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllDestinationsFail",
      payload: error.response.data,
    });
  }
};

export const getFeaturedDestinations =
  () => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getFeaturedDestinationsRequest",
      });
      const { data } = await fetchDestinations();
      dispatch({
        type: "getFeaturedDestinationsSuccess",
        payload: data.destinations,
      });
    } catch (error: any) {
      dispatch({
        type: "getFeaturedDestinationsFail",
        payload: error.response.data,
      });
    }
  };
