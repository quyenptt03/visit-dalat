import { createReducer } from "@reduxjs/toolkit";
import { UsersType } from "./types";

const initialState: UsersType = {
  isLoading: true,
};

export const usersReducer = createReducer(initialState, {
  getAllCategoriesRequest: (state) => {
    state.isLoading = true;
  },
  getAllCategoriesSuccess: (state, action) => {
    state.isLoading = false;
    state.users = action.payload;
  },
  getAllCategoriesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
