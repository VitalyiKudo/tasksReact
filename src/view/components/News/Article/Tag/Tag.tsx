import React, { FC } from 'react';

type PropTypes = {
    tags: Array<string>;
}

export const Tag:FC<PropTypes> = ({ tags }) => {
    return (
        <div className = 'tags'>
            <div>
                <span className = 'tag'>{tags[ 0 ]}</span>
            </div>
            <div>
                <span className = 'tag'>{tags[ 1 ]}</span>
            </div>
        </div>
    );
};

