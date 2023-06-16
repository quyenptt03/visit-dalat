import ReactPaginate from "react-paginate";
import { ReactComponent as PrevIcon } from "../../assets/icons/prev-icon.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next-icon.svg";

const Pagination = (props: any) => {
  const { pagination, handlePageChange } = props;
  const { page, limit, total } = pagination;
  const pageCount = Math.ceil(total / limit);
  return (
    <>
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          previousLabel={<PrevIcon />}
          nextLabel={<NextIcon />}
          pageCount={pageCount}
          forcePage={page - 1}
          onPageChange={handlePageChange}
          className="custom-pagination"
          activeClassName="active-page"
          pageLinkClassName="page-link-custom"
          disabledLinkClassName="disabled-button"
          previousLinkClassName="custom-nav-btn"
          nextLinkClassName="custom-nav-btn"
        />
      )}
    </>
  );
};
export default Pagination;
