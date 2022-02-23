import React, { FC } from 'react';
import { Section } from './Section';
import { AccordionWrapper } from './styles';

type PropTypes = {
    title: string
    content: Array<object>
}

export const Accordion: FC<PropTypes> = ({ title, content }:PropTypes) => {
    return (
        <AccordionWrapper>
            <section className = 'accordion'>
                <h1>{title ? title : 'Accordion'}</h1>
                {content.map((section:any, index:number) => {
                    return (
                        <Section
                            key = { index }
                            { ...section }
                        />
                    );
                })}
            </section>
        </AccordionWrapper>
    );
};

