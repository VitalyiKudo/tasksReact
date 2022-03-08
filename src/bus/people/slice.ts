// Core
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';

// Bus
import  * as reducers  from './reducers';

// Types
import { PeopleState } from './types';

// Slice
const initialState:PeopleState = {
    data:          null,
    isFetching:    false,
    error:         null,
    currentPerson: null,
};

export const getPeople = createAsyncThunk(
    'people/getPeople',
    async () => {
        const response = await api.people.fetch();

        return response.data.results;
    },
);

export const peopleSlice =  createSlice({
    name:          'people',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(getPeople.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(getPeople.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isFetching = false;
        });
    },
});

export const peopleAction = peopleSlice.actions;
export default peopleSlice.reducer;
