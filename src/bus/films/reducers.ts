import { BaseContact } from './types';

// Slice
export const startFetching: BaseContact = (state) => {
    state.isFetching = true;
};
export const stopFetching: BaseContact = (state) => {
    state.isFetching = false;
};
export const setFetchingError: BaseContact<object> = (state, action) => {
    state.error = action.payload;
    state.data = null;
};
export const filmsFill: BaseContact = (state, action) => {
    state.data = action.payload;
    state.error = null;
};
export const setCurrentFilm: BaseContact = (state, action) => {
    state.currentFilm = action.payload;
};
