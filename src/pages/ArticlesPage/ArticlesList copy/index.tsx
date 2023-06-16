import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllArticles } from "../../../redux/article/actions";
import { fetchArticlesTotal } from "../../../api";
import Post from "../../../components/Post";
import CategoriesList from "../../../components/CategoriesList";
import SearchBar from "../../../components/SearchBar";
import { ReactComponent as PrevIcon } from "../../../assets/icons/prev-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/next-icon.svg";
import { getAllCategories } from "../../../redux/category/actions";
import {
  Container,
  List,
  ListCol,
  FilterContainer,
  PaginationContainer,
  CategoriesContainer,
  SearchContainer,
  TitleContainer,
  Title,
  ClearBtn,
} from "./styles";

interface Filters {
  page: number;
  limit: number;
  categories: string;
  searchQuery: string;
}

const ArticlesList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { articles, isLoading } = useAppSelector((state) => state.articles);
  const [categoryChecked, setCategoryChecked] = useState<string[]>([]);
  const perPage = 4;
  const [pageCount, setPageCount] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    page: 1,
    limit: perPage,
    categories: "",
    searchQuery: "",
  });

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    const categories = params.categories || "";
    setFilters({
      ...filters,
      page: Number.parseInt(params.page as string),
      categories: categories as string,
    });
    return {
      ...params,
      page: Number.parseInt(params.page as string) || 1,
      limit: perPage,
      categories: params.categories,
    };
  }, [location.search]);

  useEffect(() => {
    if (queryParams.categories !== undefined) {
      const initCat = (queryParams.categories as string).split(",");
      setCategoryChecked((prevCategories) => [...prevCategories, ...initCat]);
    }
  }, []);

  const handleCategoryCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLInputElement;
    const categoryName = target.name;

    if (categoryChecked.includes(categoryName)) {
      setCategoryChecked((prevCategories) =>
        prevCategories.filter((category) => category !== categoryName)
      );
    } else {
      setCategoryChecked((prevCategories) => [...prevCategories, categoryName]);
    }
  };
  useEffect(() => {
    const filters = {
      ...queryParams,
      page: 1,
      categories: categoryChecked.join(",") || "",
    };
    const updatedQueryString = queryString.stringify(filters);
    navigate(`?${updatedQueryString}`, { replace: true });
  }, [categoryChecked]);
  const isChecked = (item: string) =>
    categoryChecked.includes(item) ? true : false;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllArticles(queryParams));
    window.scroll(0, 0);
  }, [queryParams, dispatch]);

  useEffect(() => {
    const getPageCount = async () => {
      const totalArticles = await fetchArticlesTotal(queryParams);
      setPageCount(Math.ceil(totalArticles.data.count / perPage));
    };
    getPageCount();
  }, [queryParams]);

  const handlePageChange = (event: { selected: number }) => {
    const filters = {
      ...queryParams,
      page: event.selected + 1,
    };
    const updatedQueryString = queryString.stringify(filters);
    navigate(`?${updatedQueryString}`, { replace: true });
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
    const filters = {
      ...queryParams,
      searchQuery,
    };
    const updatedQueryString = queryString.stringify(filters);
    navigate(`?${updatedQueryString}`, { replace: true });
  };
  const handleClearFilters = () => {
    setCategoryChecked([]);
    navigate("", { replace: true });
  };
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Container>
          <FilterContainer>
            <TitleContainer>
              <Title>Bộ Lọc</Title>
              <ClearBtn onClick={handleClearFilters}>Xoá</ClearBtn>
            </TitleContainer>
            <SearchContainer>
              <SearchBar
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
              />
            </SearchContainer>
            <CategoriesContainer>
              <CategoriesList
                handleCategoryCheck={handleCategoryCheck}
                isChecked={isChecked}
              />
            </CategoriesContainer>
          </FilterContainer>
          <List>
            <ListCol>
              {articles?.map(
                (article, index) =>
                  index % 3 === 0 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      imgSrc={article.featuredImage}
                      name={article.title}
                      description=""
                      url={`/articles/${article._id}`}
                      key={article._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {articles?.map(
                (article, index) =>
                  index % 3 === 1 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      imgSrc={article.featuredImage}
                      name={article.title}
                      description=""
                      url={`/articles/${article._id}`}
                      key={article._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {articles?.map(
                (article, index) =>
                  index % 3 === 2 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      imgSrc={article.featuredImage}
                      name={article.title}
                      description=""
                      url={`/articles/${article._id}`}
                      key={article._id}
                    />
                  )
              )}
            </ListCol>
          </List>
          <PaginationContainer className="custom-pagination">
            {pageCount > 1 && (
              <ReactPaginate
                breakLabel="..."
                previousLabel={<PrevIcon />}
                nextLabel={<NextIcon />}
                pageCount={pageCount}
                forcePage={queryParams.page - 1}
                onPageChange={handlePageChange}
                className="custom-pagination"
                activeClassName="active-page"
                pageLinkClassName="page-link-custom"
                disabledLinkClassName="disabled-button"
                previousLinkClassName="custom-nav-btn"
                nextLinkClassName="custom-nav-btn"
              />
            )}
          </PaginationContainer>
        </Container>
      )}
    </>
  );
};

export default ArticlesList;
