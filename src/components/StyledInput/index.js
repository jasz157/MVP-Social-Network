import styled from "styled-components";


const InputArea = styled.input`
    padding: 3px;
    height: 40px;
    width: 20vw;
    margin-top: 7px;
    display: flex;
    flex-wrap: wrap;
    border: solid;
    border-color: #d3d3d3;
    border-radius: 5px;
    outline-color: #b3b3b3;
    background-color: #f3f3f3;
    font-size: large;

    @media(max-width: 724px){
        & {
           width: 50vw;
        }
     }
`;




export default InputArea;