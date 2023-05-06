import React from "react";
import Footer from "../../components/Footer/Index";
import logoImg from "../../Assets/img/LinkedIn_Logo.svg-inn.png";
import Wrapper from "../../components/Wrapper";
import { FormContentWrapper, LogoBox } from "../../components/StyledBox";
import StyledButton from "../../components/StyledButton";
import GlobalStyled from "../../components/GlobalStyled";
import InputArea from "../../components/StyledInput";
import Text from "../../components/StyledText";

export default function ForgotPassword() {
  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <FormContentWrapper>
          <LogoBox style={{ marginBottom: "5px" }}>
            <img src={logoImg} alt="logo" />
          </LogoBox>
          <Text>
            Escreva seu Email, e te enviaremos a senha, não esqueça de novo esse
            serviço e pago....e serio.
          </Text>
          <InputArea placeholder="Email" />
          <StyledButton>Enviar</StyledButton>
        </FormContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
