// Core
import { BaseContact } from './types';

// Slice
export const startFetching: BaseContact = (state) => {
    state.isFetching = true;
};
export const stopFetching: BaseContact = (state) => {
    state.isFetching = false;
};
export const setFetchingError: BaseContact = (state, action) => {
    state.error = action.payload;
    state.data = null;
};
export const peopleFill: BaseContact = (state, action) => {
    state.data = action.payload;
    state.error = null;
};
export const setCurrentPerson: BaseContact = (state, action) => {
    state.currentPerson = action.payload;
};
