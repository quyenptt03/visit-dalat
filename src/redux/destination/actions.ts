import { Dispatch } from "redux";
import { Action } from "./types";
import {
  fetchDestinations,
  fetchFeaturedDestinations,
  fetchSingleDestination,
} from "../../api";

export const getAllDestinations =
  (params: object) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getAllDestinationsRequest",
      });
      const { data } = await fetchDestinations(params);
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
      const { data } = await fetchFeaturedDestinations();
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

export const getSingleDestination =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getSingleDestinationRequest",
      });
      const { data } = await fetchSingleDestination(id);
      dispatch({
        type: "getSingleDestinationSuccess",
        payload: data.destination,
      });
    } catch (error: any) {
      dispatch({
        type: "getSingleDestinationFail",
        payload: error.response.data,
      });
    }
  };
