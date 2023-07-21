import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  destinationReducer,
  featuredDestinationsReducer,
  singleDestinationReducer,
} from "./destination/reducers";
import {
  articlesReducer,
  featuredArticlesReducers,
  singleArticleReducer,
} from "./article/reducers";
import { categoriesReducer } from "./category/reducers";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    destinations: destinationReducer,
    featuredDestinations: featuredDestinationsReducer,
    destination: singleDestinationReducer,
    articles: articlesReducer,
    featuredArticles: featuredArticlesReducers,
    article: singleArticleReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
