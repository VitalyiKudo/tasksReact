import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { FilmsState } from './types';

import * as reducers from './reducers';

const initialState:FilmsState = {
    data:        null,
    isFetching:  false,
    error:       null,
    currentFilm: null,
};

export const getFilms = createAsyncThunk(
    'films/getFilms',
    async () => {
        const response = await api.films.fetch();

        return response.data.results;
    },
);

export const filmsSlice =  createSlice({
    name:          'films',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(getFilms.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(getFilms.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isFetching = false;
        });
    },
});

export const filmsAction = filmsSlice.actions;
export default filmsSlice.reducer;
