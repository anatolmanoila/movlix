import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = (props) => {
  const { items, text, id, selectedItem, onItemSelect } = props;

    return (
      <ul className="list-group">
        { items.map( item => <li className={ (item === selectedItem)
                                            ? "list-group-item active"
                                            : "list-group-item" }
                                 onClick={ () => onItemSelect(item) }
                                 key={ item[id] } //dynamic prop
                             >{ item[text] }</li>) }
      </ul>
   );
};

ListGroup.defaultProps = {
  text: 'name',
  id: '_id'
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired
};

export default ListGroup;