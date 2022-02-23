import styled from 'styled-components';

export const FormWrapper = styled.section`
.field {
    padding: 15px 30px;
    margin: 5px; 
    border: 2px solid #7DDFFF;
}
.error-field {
    top: 15px;
    left: 5px;
    width: 95%;
}
.error-handler {
    top: 18px;
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
    border: 1px solid #7DDFFF;
    color: #7DDFFF;
    margin:  20px 5px;
}
.submit {
    margin: 0px 5px;
    border: 1px solid #7DDFFF;
    color: #7DDFFF;
    background: transparent;
    padding: 10px  37px;
}
`;
