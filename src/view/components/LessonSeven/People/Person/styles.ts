// Core
import styled from 'styled-components';

export const Container = styled.section`
margin: 0px auto;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid #4d3871;
width: 15.2%;
.name {
    font-weight: bold;
    margin: 20px 0px;
    font-size: 25px;
    text-align: center;
}
.person-property {
    font-size: 20px;
    width: 100%;
    border: 1px solid #4d3871;
    padding: 20px 0px;
    .property-name {
        font-weight: bold;
    }
}
`;
