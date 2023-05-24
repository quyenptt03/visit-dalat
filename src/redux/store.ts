import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  destinationReducer,
  featuredDestinationsReducer,
  singleDestinationReducer,
} from "./destination/reducers";
import { articlesReducer, featuredArticlesReducers } from "./article/reducers";

export const store = configureStore({
  reducer: {
    destinations: destinationReducer,
    featuredDestinations: featuredDestinationsReducer,
    destination: singleDestinationReducer,
    articles: articlesReducer,
    featuredArticles: featuredArticlesReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
