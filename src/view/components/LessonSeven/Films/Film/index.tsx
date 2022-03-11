// Core
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFilmFetch } from '../../../../../bus/films';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

export const Film = () => {
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const film = useFilmFetch(id);

    return (
        <S.Container>
            <div>
            <img
                alt = 'image'
                className = 'image'
                src = 'https://www.logolynx.com/images/logolynx/8e/8ecdea3e6c81ef80c16d36de1077da91.jpeg'
            />
            <h1 className = 'name'>{film.title}</h1>
            <section className = 'property-section'>
                <div className = 'property'>
                    <p><span className = 'property-name'>Episode: </span>{film.episode_id}</p>
                </div>
                <div className = 'property'>
                    <p><span className = 'property-name'>Director: </span>{film.director}</p>
                </div>
                <div className = 'property'>
                    <p><span className = 'property-name'>Producer: </span>{film.producer}</p>
                </div>
                <div className = 'property'>
                    <p><span className = 'property-name'>Release: </span>{film.release_date}</p>
                </div>
            </section>
            </div>
        </S.Container>
    );
};
