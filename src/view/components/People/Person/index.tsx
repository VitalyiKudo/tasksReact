// Core
import React from 'react';
import { useLocation } from 'react-router-dom';

// Bus
import { usePersonFetch } from '../../../../bus/people';

// Styles
import * as S from './styles';

// Types

export const Person = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const person = usePersonFetch(id);
    if (person) {
        console.log(person);
    }

    return (
        <S.Container>
            <div>
                {person.name}
            </div>
            <div>
                {person.gender}
            </div>
        </S.Container>
    );
};
