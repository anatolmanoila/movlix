import React from 'react';

//Input: liked boolean
//output: onClick

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += '-o';

    return (
        <i  className={ classes } aria-hidden="true"
            style={ {cursor: 'pointer' } }
            onClick={ props.onLikeClicked } />
    );
};

export default Like;