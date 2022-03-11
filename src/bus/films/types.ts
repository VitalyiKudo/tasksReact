import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type FilmsState = {
    data:          object | null,
    isFetching:    boolean,
    error:         object | null,
    currentFilm: object | null,
};

export type BaseContact<T = any> = CaseReducer<FilmsState, PayloadAction<T>>;

