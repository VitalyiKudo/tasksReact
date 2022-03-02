import styled from 'styled-components';

export const FormWrapper = styled.section`
border: 2px solid #4d3871;
margin: 0px auto;
width: 40%;
display: flex;
justify-content: center;
.field {
    padding: 20px 40px;
    margin: 5px; 
    border: 2px solid #4d3871;
}
.error-field {
    top: 20px;
    left: 5px;
    width: 95%;
}
.error-handler {
    top: 20px;
    left: 5px;
    width: 110px;
}
.error-handler, .error-field {
    border: 1px solid red;
    color: red;
    position: absolute;
    z-index: 10;
}
.for-handler {
    margin: 50px 0px;
}
.for-field,
.for-handler {
   position: relative;
}
.handler {
    border: 2px solid #4d3871;
    color: #4d3871;
    margin:  20px 5px;
}
.submit {
    margin: 0px 5px;
    border: 2px solid #4d3871;
    color:  #4d3871;
    background: transparent;
    padding: 10px  37px;
    margin-bottom: 10px;
    &:hover {
        color: white;
        background: #4d3871;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transition: 0.5s;
    }
}
`;
