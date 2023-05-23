import { Dispatch } from "redux";
import { Action } from "./types";
import { fetchArticles } from "../../api";

export const getAllArticles = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "getAllArticlesRequest",
    });
    // const result = await fetchArticles(params);
    const { data } = await fetchArticles();
    dispatch({
      type: "getAllArticlesSuccess",
      payload: data.articles,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllArticlesFail",
      payload: error.response.data,
    });
  }
};
