// Core
import styled, { keyframes } from 'styled-components';

export const List = styled.section`
display: block;
.film-name {
    font-size: 20px;
    font-weight: bold;
}
.film-image {
  width: 250px;
  height: 250px;
}
`;
export const Section = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const Spinner = styled.p`
.message {
    font-size: 25px;
    font-weight: bold;
}
.loader {
  margin: 20px 0px 0px 35px;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 8px solid #4d3871;
  border-color: #4d3871 transparent #4d3871 transparent;
  animation: ${loading} 1.2s linear infinite;
}
`;
