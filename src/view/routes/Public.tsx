// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Accordion } from '../components/Accordion/Accordion';
import { Data } from '../components/Accordion/accordionsData';
import { News } from '../components/News/News';
import { NoSense } from '../components/NoSense';
import { People } from '../components/People';
import { Person } from '../components/People/Person';
import { PostsApiLoader } from '../components/PostsApiLoader';
import { StudentProfile } from '../components/StudentProfile';
import { StudentRegistration } from '../components/StudentRegistration';

// Pages
import { Main } from '../pages';

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [{ path: '*', element: <Navigate to = '/' /> }],
        },
        {
            path:    '1',
            element: <News />,
        },
        {
            path:    '2',
            element: <Accordion { ...Data } />,
        },
        {
            path:    '3',
            element: <PostsApiLoader />,
        },
        {
            path:    '4',
            element: <NoSense />,
        },
        {
            path:    '5',
            element: <StudentRegistration />,
        },
        {
            path:    '6',
            element: <StudentProfile />,
        },
        {
            path:    '7',
            element: <People />,
        },
        { path: '7/:id', element: <Person /> },

    ]);

    return routes;
};
