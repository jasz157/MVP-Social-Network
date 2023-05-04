import React from "react";
//import "./Footer.css"
import { StyledBox } from "../StyledBox";
import styled from "styled-components";
import GlobalStyled from "../GlobalStyled";

const FooterBox = styled(StyledBox)`
    padding:0;
    height: 32px;
    width: 100vw;
    margin-top: 78vh;
    display: flex;
    justify-content: center;

    & h2 {
        font-weight: lighter;
    }
`;


export default function Footer() {
    return (
        <>
        <GlobalStyled/>
        <FooterBox>
            <h2>Linked Inn - 2023</h2>
        </FooterBox>
        </>
    )
}