import React from "react";
//import './SignUp.css'
import InputArea from "../../components/StyledInput";
import logoImg from '../../Assets/img/LinkedIn_Logo.svg-inn.png';
import Footer from "../../components/Footer/Index";
import { FormContentWrapper } from "../../components/StyledBox";
import { LogoBox } from "../../components/StyledBox";
import Wrapper from "../../components/Wrapper";
import StyledButton from "../../components/StyledButton";
import styled from "styled-components";
import GlobalStyled from "../../components/GlobalStyled";

const BigButton = styled(StyledButton)`
   height: 70px;
`;



export default function SignUp() {
    return (
        <>
            <GlobalStyled />
            <Wrapper>
                <FormContentWrapper>
                    <LogoBox>
                        <img src={logoImg} alt="logo" />
                    </LogoBox>
                    <InputArea placeholder="Usuario" />
                    <InputArea  placeholder="Nome"/>
                    <InputArea  placeholder="Sobrenome"/>
                    <InputArea placeholder="Email"/>
                    <InputArea placeholder="Senha" type="password" />
                    <InputArea placeholder="Confirmar Senha" type="password" />
                    <BigButton>Cadastrar</BigButton>
                </FormContentWrapper>
            </Wrapper>
            <Footer />
        </>

    )
}