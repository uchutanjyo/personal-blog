import React, {useEffect} from "react";
import usePagination, { DOTS } from "../hooks/usePagination";
import PropTypes from "prop-types";

const Pagination = ({
  onPageSizeOptionChange,
  pageSizeOptions,
  onPageChange,
  onNext,
  onPrev,
  currentPage,
  pageSize,
  pageNumbers,
  lastPage
}) => {

  return (
    <ul
      className="pagination-wrapper"
    >
      <li className="pagination-number">
        <button
          type="button"
          className="left-arrow"
          onClick={onPrev}
          disabled={currentPage === 1 ? true : false} 
        >
          L
        </button>
      </li>
      {pageNumbers.map((pageNumber) => {

        if (pageNumber === DOTS) {
          return (
            <li  className="dots">
...            </li>
          );
        }
        
        return (
          <li
            className="pagination-number"
            aria-current={currentPage === pageNumber ? 'page' : false} 
          >
            <button
              type="button"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="pagination-number">
        <button
          type="button"
          className="right-arrow"
          onClick={onNext}
          disabled={currentPage === lastPage ? true : false} 
        >
          R
        </button>
      </li>

      <select
        className="pagination-selection"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize===size} value={size}
          >
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

export default Pagination;