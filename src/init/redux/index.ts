// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import studentProfile from '../../bus/studentProfile';
// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        studentProfile,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
