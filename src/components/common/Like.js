import React from 'react';

const Like = (props) => {
    const { liked, onClick } = props;

    let classes = liked ? 'fa fa-heart' : 'fa fa-heart-o';
    return (
        <i className={ classes }
            style={ { cursor: 'pointer' } }
            onClick={ onClick } />
     );
}

export default Like;