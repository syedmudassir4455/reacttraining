import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { checkPropTypes } from "prop-types";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  console.log("Current Page", currentPage);
  const pagesCount = Math.ceil(itemCount / pageSize);
  // console.log("page count",pagesCount)
  if (pagesCount === 1) return null;
  console.log("page count", pagesCount);
  const pages = _.range(1, pagesCount + 1);
  console.log("Page count", pages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active " : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
