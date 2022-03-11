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
                    onClick = { () => navigate('people') }>
                        <img
                            alt = 'people'
                            className = 'link-image'
                            src = 'https://media.istockphoto.com/vectors/silhouette-avatars-persons-office-professional-profiles-anonymous-vector-id1180975836?k=20&m=1180975836&s=612x612&w=0&h=Nr7hHn1PbcrhfWL7BbOefI695HkTGu4x58ezcrpzMJ4='
                        />
                <p className = 'link-name'>People</p>
                </button>
                <button
                    className = 'nav-link'
                    onClick = { () => navigate('films') }>
                        <img
                            alt = 'films'
                            className = 'link-image'
                            src = 'https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg'
                        />
                <p className = 'link-name'>Films</p>
                </button>
            </div>
        </S.Container>
    );
};
