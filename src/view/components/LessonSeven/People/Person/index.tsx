// Core
import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePersonFetch } from '../../../../../bus/people';

// Bus

// Styles
import * as S from './styles';

// Types

export const Person = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const person = usePersonFetch(id);

    return (
        <S.Container>
            <div>
            <img
                alt = 'person-image'
                className = 'person-image'
                src = 'https://png.pngitem.com/pimgs/s/130-1300243_computer-icons-portable-network-graphics-user-icon-caller.png'
            />
            <h1 className = 'name'>{person.name}</h1>
            <section className = 'property-section'>
                <div className = 'person-property'>
                    <p><span className = 'property-name'>Gender: </span>{person.gender}</p>
                </div>
                <div className = 'person-property'>
                    <p><span className = 'property-name'>Height: </span>{person.height}</p>
                </div>
                <div className = 'person-property'>
                    <p><span className = 'property-name'>Mass: </span>{person.mass}</p>
                </div>
                <div className = 'person-property'>
                    <p><span className = 'property-name'>Eye color: </span>{person.eye_color}</p>
                </div>
                <div className = 'person-property'>
                    <p><span className = 'property-name'>Skin color: </span>{person.skin_color}</p>
                </div>
            </section>
            </div>
        </S.Container>
    );
};
