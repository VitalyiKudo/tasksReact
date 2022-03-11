// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import * as S from './styles';


export const LessonSeven = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <div className = 'nav'>
                <button
                    className = 'nav-link'
                    onClick = { () => navigate('people') }>People
                </button>
                <button
                    className = 'nav-link'
                    onClick = { () => navigate('films') }>Films
                </button>
            </div>
        </S.Container>
    );
};
