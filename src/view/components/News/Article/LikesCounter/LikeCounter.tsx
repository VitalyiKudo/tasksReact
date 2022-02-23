import React, { FC, useState } from 'react';

type PropTypes = {
    defaultValue: number
}

export const LikeCounter:FC<PropTypes> = ({ defaultValue }) => {
    const [ likes =  defaultValue, setLikes ] = useState<number>();
    const likeDecrement = () => {
        setLikes(likes + 1);
    };

    return (
        <span className = 'likesCounter'>{likes}
            <button onClick = { likeDecrement }>👍</button>
        </span>
    );
};
