import { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllArticles } from "../../../redux/article/actions";
import { fetchArticlesTotal } from "../../../api";
import Post from "../../../components/Post";
import CategoriesList from "../../../components/CategoriesList";
import SearchBar from "../../../components/SearchBar";
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
import Pagination from "../../../components/Pagination";
import Loading from "../../../components/Loading";
import articleApi from "../../../api/articleApi";

interface Filters {
  page: number;
  limit: number;
  categories: string;
  searchQuery: string;
}

const ArticlesList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { articles, isLoading } = useAppSelector((state) => state.articles);
  const [totalArticles, setTotalArticles] = useState(0);
  const [filters, setFilters] = useState<Filters>(() => {
    const params = queryString.parse(location.search);
    return {
      page: Number(params.page) || 1,
      limit: Number(params.limit) || 24,
      categories: (params.categories || "") as string,
      searchQuery: (params.searchQuery || "") as string,
    };
  });

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllArticles(filters));
    const updatedQueryString = queryString.stringify(filters);
    navigate(`?${updatedQueryString}`, { replace: true });
    window.scroll(0, 0);
  }, [dispatch, filters]);

  useEffect(() => {
    const getTotal = async () => {
      const totalArticles = await articleApi.getTotal(filters);
      setTotalArticles(totalArticles.data.count);
    };
    getTotal();
  }, [filters]);

  const handlePageChange = (event: { selected: number }) => {
    setFilters({
      ...filters,
      page: event.selected + 1,
    });
  };
  const handleCategoryCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLInputElement;
    const categoryName = target.name;
    let updateFilters = { ...filters };

    if (filters.categories.includes(categoryName)) {
      const arrCategories = updateFilters.categories.split(",");
      const filtersCategories = arrCategories.filter(
        (category) => category !== categoryName
      );
      updateFilters = {
        ...updateFilters,
        page: 1,
        categories: filtersCategories.join(","),
      };
    } else {
      updateFilters = {
        ...updateFilters,
        page: 1,
        categories: filters.categories + `,${categoryName}`,
      };
    }
    setFilters(updateFilters);
  };

  const isChecked = (item: string) =>
    filters.categories.includes(item) ? true : false;
  const handleSearchChange = (newFilters: { searchQuery: string }) => {
    setFilters({
      ...filters,
      page: 1,
      searchQuery: newFilters.searchQuery,
    });
  };
  const handleClearFilters = () => {
    setFilters({
      page: 1,
      limit: 24,
      categories: "",
      searchQuery: "",
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Container>
          <FilterContainer>
            <TitleContainer>
              <Title>Bộ Lọc</Title>
              <ClearBtn onClick={handleClearFilters}>Xoá</ClearBtn>
            </TitleContainer>
            <SearchContainer>
              <SearchBar onSubmit={handleSearchChange} />
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
            <Pagination
              pagination={{
                page: filters.page,
                limit: filters.limit,
                total: totalArticles,
              }}
              handlePageChange={handlePageChange}
            />
          </PaginationContainer>
        </Container>
      )}
    </>
  );
};

export default ArticlesList;
