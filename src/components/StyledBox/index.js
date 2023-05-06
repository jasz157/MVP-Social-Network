import styled from "styled-components";

const StyledBox = styled.div`
  padding: 10px;
  height: 50vh;
  width: 31vw;
  background-color: rgb(255, 255, 255);
  border: solid;
  border-color: #d3d3d3;

  @media (max-width: 724px) {
    & {
      width: 60%;
      height: 57vh;
    }
  }

  @media (max-width: 450px) {
    & {
      width: 85%;
    }
  }
`;

const FormContentWrapper = styled(StyledBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 40px;
  }
`;

export { StyledBox, FormContentWrapper, LogoBox };
