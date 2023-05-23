import { createReducer } from "@reduxjs/toolkit";
import { ArticlesType } from "./types";

const initialState: ArticlesType = {
  isLoading: true,
};

export const articlesReducer = createReducer(initialState, {
  getAllArticlesRequest: (state) => {
    state.isLoading = true;
  },
  getAllArticlesSuccess: (state, action) => {
    state.isLoading = false;
    state.articles = action.payload;
  },
  getAllArticlesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
