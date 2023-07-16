import { Dispatch } from "redux";
import categoryApi from "../../api/categoryApi";
import { Action } from "./types";

export const getAllCategories = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "getAllCategoriesRequest",
    });
    const { data } = await categoryApi.getAll();
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
