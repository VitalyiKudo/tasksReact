// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { tasks } from './items';

// Styles
import { Container } from './styles';

// Icons

const Main: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <img
                alt = 'react'
                className = 'task-image'
                src = 'https://bestprogrammer.ru/wp-content/uploads/2020/08/React.jpg'
            />
            <nav className = 'task-nav'>
                {tasks.map((task, index) => (
                    <button
                        className = 'nav-link'
                        key = { index }
                        onClick = { () => navigate(task.id) }>
                        {task.name}
                    </button>
                ))}
            </nav>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
