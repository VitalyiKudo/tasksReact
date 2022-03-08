// Core
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Helpers
import { root } from '../../api/confil';

//Bus
import { getPeople, peopleAction } from './slice';

// Hooks
export const usePeopleFetch = (): any => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPeople());
    }, [ dispatch ]);

    const people = useSelector((state) => state.people);

    if (people) {
        const { data, isFetching, error } = people;

        return { data, isFetching, error };
    }
};
export const usePersonFetch = (id: number): any => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${root}/people/${id}`)
        .then((response) => {
            dispatch(peopleAction.setCurrentPerson(response.data));
        });
    }, [ dispatch ]);

    const person = useSelector((state) => state.people.currentPerson);

    if (person) {
        return person;
    }
};
