import styled from "styled-components";


const StyledButton = styled.button`
    margin-top: 7px;
    height: 40px;
    width: 20.8vw;
    border: unset;
    border-radius: 5px;
    background-color: rgb(75, 113, 249);
    color: white;
    font-size: larger;

    &:hover{
        background-color: rgb(43, 86, 241);
    }

    &:active{
        background-color: rgb(89, 124, 250);
    }
    
    @media (max-width: 724px) {
     & {
       width: 51.4vw;
       height: 45px;
    }
    }
  `;


export default StyledButton;