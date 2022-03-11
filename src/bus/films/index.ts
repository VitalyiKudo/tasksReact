import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { root } from '../../api/confil';
import { useSelector } from '../../tools/hooks';
import { filmsAction, getFilms } from './slice';

// Hooks
export const useFilmsFetch = (): any => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms());
    }, [ dispatch ]);

    const films = useSelector((state) => state.films);

    if (films) {
        const { data, isFetching, error } = films;

        return { data, isFetching, error };
    }
};
export const useFilmFetch = (id: number): any => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${root}/films/${id}`)
        .then((response) => {
            dispatch(filmsAction.setCurrentFilm(response.data));
        });
    }, [ dispatch ]);

    const film = useSelector((state) => state.films.currentFilm);

    if (film) {
        return film;
    }
};
