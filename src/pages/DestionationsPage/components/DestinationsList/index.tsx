import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

import { URL } from "../../../../api";
import Post from "../../../../components/Post";
import { getAllDestinations } from "../../../../redux/destination/actions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";

import { ReactComponent as NextIcon } from "../../../../assets/icons/next-icon.svg";
import { ReactComponent as PrevIcon } from "../../../../assets/icons/prev-icon.svg";

import destinationApi from "../../../../api/destinationApi";
import Loading from "../../../../components/Loading";
import { Container, List, ListCol, PaginationContainer } from "./styles";

const DestinationsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page as string) || 1,
    };
  }, [location.search]);
  const perPage = 12;
  const [pageCount, setPageCount] = useState(0);
  const { destinations, isLoading } = useAppSelector(
    (state) => state.destinations
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllDestinations(queryParams));
    window.scroll(0, 0);
  }, [queryParams, dispatch]);

  useEffect(() => {
    const getPageCount = async () => {
      const totalDestinations = await destinationApi.getTotal();
      setPageCount(Math.ceil(totalDestinations.data.count / perPage));
    };
    getPageCount();
  }, []);

  const handlePageChange = (event: { selected: number }) => {
    const filters = {
      ...queryParams,
      page: event.selected + 1,
    };
    const updatedQueryString = queryString.stringify(filters);
    navigate(`?${updatedQueryString}`, { replace: true });
  };
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Container>
          <List>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 0 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      name={destination.name}
                      description={destination.description}
                      imgSrc={URL + destination.images[0]}
                      url={`/destinations/${destination._id}`}
                      key={destination._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 1 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      name={destination.name}
                      description={destination.description}
                      imgSrc={URL + destination.images[0]}
                      url={`/destinations/${destination._id}`}
                      key={destination._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 2 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      name={destination.name}
                      description={destination.description}
                      imgSrc={URL + destination.images[0]}
                      url={`/destinations/${destination._id}`}
                      key={destination._id}
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

export default DestinationsList;
