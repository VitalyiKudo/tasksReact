// Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// Bus
import { useFilmsFetch } from '../../../../bus/films';
import { filmsAction } from '../../../../bus/films/slice';

// Styles
import * as S from './styles';

export const Films = () => {
    const filmsFetch = useFilmsFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isFetching, data, error } = filmsFetch;

    if (data) {
        console.log(data);
    }

    if (filmsFetch) {
        // errors
        if (error && error.status === 404) {
            return (
                <div>
                    <h1>Error 404</h1>
                    <p>films not found</p>
                </div>
            );
        }
        if (error && error.status !== 404) {
            return <div>Something went wrong</div>;
        }
        // spiner
        const spinner = isFetching && (
            <S.Spinner>
                <p className = 'message'>Loading films...</p>
                <div className = 'loader' />
            </S.Spinner>
        );

        // list of people
        const peopleList = !isFetching && data && data.length && data.map((film: any, index: number) => {
            const idRegExp = /\/([0-9]*)\/$/;
            const id =  film.url.match(idRegExp)[ 1 ];

            return (
                <S.List key = { index }>
                    <button
                        className = 'film-link'
                        onClick = { () => {
                            dispatch(filmsAction.setCurrentFilm(film));
                            navigate(`/7/films/${id}`);
                        } }>
                    <img
                        alt = 'film-image'
                        className = 'film-image'
                        src = 'https://www.logolynx.com/images/logolynx/8e/8ecdea3e6c81ef80c16d36de1077da91.jpeg'
                    />
                    <p className = 'film-name'>
                    {film.title}
                    </p>
                    </button>
                </S.List>
            );
        });

        // final return
        return (
            <S.Section>
                {spinner}
                {peopleList}
                <Outlet />
            </S.Section>
        );
    }

    return (
        <div>Error component</div>
    );
};
