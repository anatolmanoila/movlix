import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'; //v4.17.10

//reusable comp:
//Interface: inputs passed in props

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize); //closest int
  if (pagesCount === 1) return null;
  // [1...pagesCount].map()
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a href='#' className="page-link"
               onClick={() => onPageChange(page)}>{page}</a>
          </li>))
        }
      </ul>
    </nav>
  );
}


Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;