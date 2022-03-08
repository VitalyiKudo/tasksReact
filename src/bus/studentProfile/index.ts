// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';


// Types
type dataType = {
    firstName:  string,
    surName:    string,
    age:        string,
    email:      string,
    sex:        string,
    speciality: string,
}

// Slice
const initialState = {
    data: {
        firstName:  '',
        surName:    '',
        age:        '',
        email:      '',
        sex:        '',
        speciality: '',
    },
};

export const studentSlice = createSlice({
    name:     'studentProfile',
    initialState,
    reducers: {
        createProfileAction: (state, action: PayloadAction<dataType>) => {
            state.data = action.payload;
        },
    },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;

// Hook
export const useStudentProfile = () => {
    const dispatch = useDispatch();

    return {
        studentProfile:    useSelector(({ studentProfile }) => studentProfile.data),
        setStudentProfile: (options: dataType) => void dispatch(studentActions.createProfileAction(options)),
    };
};
