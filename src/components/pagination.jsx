import React, { Component } from "react";
import _ from "lodash";

const Pagination = ({ total, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(total / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount == 1) return null;

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              onClick={() => onPageChange(page)}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
