import styled from 'styled-components';

export const ProfileWrapper = styled.section`
position: relative;
border: 2px solid #4d3871;
margin: 0px auto;
width: 60%;
display: flex;
align-items: center;
flex-direction: column;
.profile-heading {
}
.profile-line {
    background: #4d3871;
    width: 100%;
    height: 60px;
}
.profile-picture {
    left: 400px;
    top: 0px;
    position: absolute;
    height: 300px;
    width: 300px;
    border: 2px solid black;
    border-radius: 50%;
}
.profile-name {
    margin: 270px 0px 20px 0px;
    margin-left: 250px;
    font-size: 35px;
    font-weight: bold;
}
.profile-content {
    padding-bottom: 50px;
    display: flex;
    .main-info {
        margin-right: 50px;
    }
    .info-heading {
        margin-bottom: 10px;
        font-size: 28px;
    }
    .info-content {
        border: 1px solid #4d3871;
        padding: 15px;
        width: 250px;
        font-size: 19px;
    }
    .info-name {
        font-weight: bold;
    }
}
`;

export const NotFoundProfile = styled.section`
border: 3px solid #4d3871;
padding: 20px;
display: flex;
align-items: center;
margin: 150px auto;
flex-direction: column;
.heading {
    font-size: 40px;
}
.content {
    font-size: 25px;
    margin: 15px 0px;
}
.link {
    background: #4d3871;
    color: white;
    font-size: 20px;    
    border: 2px solid #4d3871;
    &:hover {
        font-weight: bold;
        transform: scale(1.10, 1.10);
        transition: 0.5s;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
}
`;
