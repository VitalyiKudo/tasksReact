import React, { FC, useState } from 'react';

type PropTypes = {
    defaultValue: number
}

export const CommentsCounter:FC<PropTypes> = ({ defaultValue }) => {
    const [ commentsCounter =  defaultValue ] = useState<number>();

    return (
        <span className = 'commentsCounter'>{commentsCounter}</span>
    );
};
