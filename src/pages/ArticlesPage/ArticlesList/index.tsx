import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hook";
import { getAllArticles } from "../../../redux/article/actions";

const ArticlesList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);
  return <div></div>;
};

export default ArticlesList;
