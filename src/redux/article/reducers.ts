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

export const featuredArticlesReducers = createReducer(initialState, {
  getFeaturedArticlesRequest: (state) => {
    state.isLoading = true;
  },
  getFeaturedArticlesSuccess: (state, action) => {
    state.isLoading = false;
    state.articles = action.payload;
  },
  getFeaturedArticlesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export const singleArticleReducer = createReducer(initialState, {
  getSingleArticleRequest: (state) => {
    state.isLoading = true;
  },
  getSingleArticleSuccess: (state, action) => {
    state.isLoading = false;
    state.article = action.payload;
  },
  getSingleArticleFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
