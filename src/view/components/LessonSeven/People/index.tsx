// Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { usePeopleFetch } from '../../../../bus/people';
import { peopleAction } from '../../../../bus/people/slice';

// Bus


// Styles
import * as S from './styles';

export const People = () => {
    const peopleFetch = usePeopleFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isFetching, data, error } = peopleFetch;

    if (peopleFetch) {
        // errors
        if (error && error.status === 404) {
            return (
                <div>
                    <h1>Error 404</h1>
                    <p>people not found</p>
                </div>
            );
        }
        if (error && error.status !== 404) {
            return <div>Something went wrong</div>;
        }
        // spiner
        const spinner = isFetching && (
            <S.Spinner>
                <p className = 'message'>Loading people...</p>
                <div className = 'loader' />
            </S.Spinner>
        );

        // list of people
        const peopleList = !isFetching && data && data.length && data.map((person: any, index: number) => {
            const idRegExp = /\/([0-9]*)\/$/;
            const id =  person.url.match(idRegExp)[ 1 ];

            return (
                <S.List key = { index }>
                    <button
                        className = 'person-link'
                        onClick = { () => {
                            dispatch(peopleAction.setCurrentPerson(person));
                            navigate(`/7/people/${id}`);
                        } }>
                    <img
                        alt = 'person-image'
                        className = 'person-image'
                        src = 'https://png.pngitem.com/pimgs/s/130-1300243_computer-icons-portable-network-graphics-user-icon-caller.png'
                    />
                    <p className = 'person-name'>
                    {person.name}
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
