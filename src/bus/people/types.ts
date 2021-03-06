import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type PeopleState = {
    data:          DataState | null,
    isFetching:    boolean,
    error:         object | null,
    currentPerson: DataState| null,
};

export type DataState = {
    birth_year: number,
    created: number,
    edited: string
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: Array<string>,
    starships: Array<string>,
    url: string,
    vehicles: Array<string>,
}

export type BaseContact<T = any> = CaseReducer<PeopleState, PayloadAction<T>>;
