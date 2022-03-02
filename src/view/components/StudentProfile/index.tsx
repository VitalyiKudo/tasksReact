import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentProfile } from '../../../bus/studentProfile';
import { NotFoundProfile, ProfileWrapper } from './styles';

export const StudentProfile = () => {
    const navigate = useNavigate();
    const { studentProfile } = useStudentProfile();

    if (!studentProfile.firstName) {
        return (
            <NotFoundProfile>
            <h1 className = 'heading'>Profile not found :(</h1>
            <p className = 'content'>New on site ?</p>
            <button
                className = 'link'
                onClick = { () => navigate('/4') }>create profile here
            </button>
            </NotFoundProfile>
        );
    }

    return (
        <ProfileWrapper>
            <div className = 'profile-line' />
            <main>
                <div className = 'profile-heading'>
                    <img
                        alt = 'image'
                        className = 'profile-picture'
                        src = 'https://blueocean.ca/wp-content/uploads/2015/05/Male-Profile-Picture.jpg'
                    />
                    <p className = 'profile-name'>{studentProfile.firstName}</p>
                </div>
                <div className = 'profile-content'>
                    <div className = 'main-info'>
                        <h1 className = 'info-heading'>Basic information</h1>
                        <p className = 'info-content'><span className = 'info-name'>Full name: </span>{`${studentProfile.firstName} + ${studentProfile.surName}`}</p>
                        <p className = 'info-content'><span className = 'info-name'>Email: </span>{studentProfile.email}</p>
                        <p className = 'info-content'><span className = 'info-name'>Speciality: </span>{studentProfile.speciality}</p>
                    </div>
                    <div className = 'additional-indo'>
                        <h1 className = 'info-heading'>Additional information</h1>
                        <p className = 'info-content'><span className = 'info-name'>Age: </span>{studentProfile.age}</p>
                        <p className = 'info-content'><span className = 'info-name'>Gender: </span>{studentProfile.sex}</p>
                    </div>
                </div>
            </main>
        </ProfileWrapper>
    );
};

