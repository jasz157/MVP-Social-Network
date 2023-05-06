import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

}

body {
    background-color: rgb(244, 244, 244);
    min-height: 100vh;
    min-width: 100vw;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


`;

export default GlobalStyled;
