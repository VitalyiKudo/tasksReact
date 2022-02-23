import classNames from 'classnames';
import React, { FC, useState } from 'react';

type PropTypes = {
    question: string
    answer: string
}

export const Section:FC<PropTypes> = ({ question, answer }) => {
    const [ isSelected, setIsSelected ] = useState(false);
    const selectClass = classNames('accordion-item', { selected: isSelected });
    const selectHandler = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true);
    };

    return (
        <div>
            <div
                className = { selectClass }
                onClick = { selectHandler }>
                <div className = 'accordion-question'>
                    <span>{ question }</span>
                </div>
                <p className = 'accordion-answer'>{ answer }</p>
            </div>
        </div>
    );
};
