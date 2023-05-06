import React from "react";
import logoImg from "../../Assets/img/LinkedIn_Logo.svg-inn.png";
import InputArea from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { FormContentWrapper } from "../../components/StyledBox";
import { LogoBox } from "../../components/StyledBox";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import GlobalStyled from "../../components/GlobalStyled";

export default function Login() {
  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <FormContentWrapper>
          <LogoBox>
            <img src={logoImg} alt="logo" />
          </LogoBox>

          <InputArea placeholder="Email ou Usuario" />
          <InputArea placeholder="Senha" />
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/feed");
            }}
          >
            Login
          </StyledButton>

          <a href="/forgotPassword" className="pageAnchor">
            Esqueceu a senha ?
          </a>
          <a href="/signup" className="pageAnchor">
            Não e usuario ?...Cadastre-se
          </a>
        </FormContentWrapper>
      </Wrapper>
    </>
  );
}
