import React from 'react';
//import PropTypes from 'prop-types';

const Searchbar = (props) => {
  return (
    <React.Fragment>
      <div className="mb-4">
        <form className="form-inline my-2 my-lg-0 ">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

          <button onClick={ props.onSearchEnter } className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </React.Fragment>
  );
}

// Searchbar.propTypes = {
//   term: PropTypes.string.isRequired,
// }

export default Searchbar;