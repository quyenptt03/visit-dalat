import { createReducer } from "@reduxjs/toolkit";
import { DestinationsType } from "./types";

const initialState: DestinationsType = {
  isLoading: true,
};

export const destinationReducer = createReducer(initialState, {
  getAllDestinationsRequest: (state) => {
    state.isLoading = true;
  },
  getAllDestinationsSuccess: (state, action) => {
    state.isLoading = false;
    state.destinations = action.payload;
  },
  getAllDestinationsFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export const featuredDestinationsReducer = createReducer(initialState, {
  getFeaturedDestinationsRequest: (state) => {
    state.isLoading = true;
  },
  getFeaturedDestinationsSuccess: (state, action) => {
    state.isLoading = false;
    state.destinations = action.payload;
  },
  getFeaturedDestinationsFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export const singleDestinationReducer = createReducer(initialState, {
  getSingleDestinationRequest: (state) => {
    state.isLoading = true;
  },
  getSingleDestinationSuccess: (state, action) => {
    state.isLoading = false;
    state.destination = action.payload;
  },
  getSingleDestinationFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
