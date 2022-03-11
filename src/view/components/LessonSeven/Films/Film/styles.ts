// Core
import styled from 'styled-components';

export const Container = styled.section`
margin: 0px auto;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid #4d3871;
width: 15.2%;
.image {
    height: 250px;
    width: 250px;
}
.name {
    font-weight: bold;
    margin: 20px 0px;
    font-size: 25px;
    text-align: center;
}
.property {
    font-size: 20px;
    width: 280px;
    border: 1px solid #4d3871;
    padding: 20px 0px;
    .property-name {
        font-weight: bold;
    }
}
`;
