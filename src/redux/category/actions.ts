import { Dispatch } from "redux";
import { Action } from "./types";
import { fetchCategories } from "../../api";

export const getAllCategories = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "getAllCategoriesRequest",
    });
    const { data } = await fetchCategories();
    dispatch({
      type: "getAllCategoriesSuccess",
      payload: data.categories,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllCategoriesFail",
      payload: error.response.data.msg,
    });
  }
};
