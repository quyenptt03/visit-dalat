import { Dispatch } from "redux";
import { Action } from "./types";
import {
  fetchArticles,
  fetchFeaturedArticles,
  fetchSingleArticle,
} from "../../api";

export const getAllArticles =
  (params: object) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getAllArticlesRequest",
      });
      const { data } = await fetchArticles(params);
      dispatch({
        type: "getAllArticlesSuccess",
        payload: data.articles,
      });
    } catch (error: any) {
      dispatch({
        type: "getAllArticlesFail",
        payload: error.response.data.msg,
      });
    }
  };

export const getFeaturedArticles = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "getFeaturedArticlesRequest",
    });
    const { data } = await fetchFeaturedArticles();
    dispatch({
      type: "getFeaturedArticlesSuccess",
      payload: data.articles,
    });
  } catch (error: any) {
    dispatch({
      type: "getFeaturedArticlesFail",
      payload: error.response.data.msg,
    });
  }
};

export const getSingleArticle =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: "getSingleArticleRequest",
      });
      const { data } = await fetchSingleArticle(id);
      dispatch({
        type: "getSingleArticleSuccess",
        payload: data.article,
      });
    } catch (error: any) {
      dispatch({
        type: "getSingleArticleFail",
        payload: error.response.data.msg,
      });
    }
  };
