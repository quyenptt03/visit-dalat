import { createReducer } from "@reduxjs/toolkit";
import { CategoriesType } from "./types";

const initialState: CategoriesType = {
  isLoading: true,
};

export const categoriesReducer = createReducer(initialState, {
  getAllCategoriesRequest: (state) => {
    state.isLoading = true;
  },
  getAllCategoriesSuccess: (state, action) => {
    state.isLoading = false;
    state.categories = action.payload;
  },
  getAllCategoriesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
