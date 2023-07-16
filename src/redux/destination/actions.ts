import { Dispatch } from "redux";
import destinationApi from "../../api/destinationApi";
import { Action } from "./types";

export const getAllDestinations =
  (params: object) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getAllDestinationsRequest",
      });
      const { data } = await destinationApi.getAll(params);
      dispatch({
        type: "getAllDestinationsSuccess",
        payload: data.destinations,
      });
    } catch (error: any) {
      dispatch({
        type: "getAllDestinationsFail",
        payload: error.response.data.msg,
      });
    }
  };

export const getFeaturedDestinations =
  () => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getFeaturedDestinationsRequest",
      });
      const { data } = await destinationApi.getFeatured();
      dispatch({
        type: "getFeaturedDestinationsSuccess",
        payload: data.destinations,
      });
    } catch (error: any) {
      dispatch({
        type: "getFeaturedDestinationsFail",
        payload: error.response.data.msg,
      });
    }
  };

export const getSingleDestination =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getSingleDestinationRequest",
      });
      const { data } = await destinationApi.get(id);
      dispatch({
        type: "getSingleDestinationSuccess",
        payload: data.destination,
      });
    } catch (error: any) {
      dispatch({
        type: "getSingleDestinationFail",
        payload: error.response.data.msg,
      });
    }
  };
