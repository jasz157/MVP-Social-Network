import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { StyledBox } from "../../components/StyledBox";

export const WrapperFeed = styled(Wrapper)`
  margin-top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const WrapperPost = styled(StyledBox)`
 
  width: 60%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media (max-width: 500px) {
      & {
        width: 80%;
      }
  }



`;

export const Post = styled(StyledBox)`
  width: 600px;
  height:  80vh;
  margin-bottom: 40px;
  background-color: #e2e2e2;
  padding: 0;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

`;


export const HeaderPost = styled(StyledBox)`
    height: 10px;
    width: 100%;
    object-fit: cover;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const FooterPost = styled(StyledBox)`
   height: max-content;
   width: 100%;
   border: none;
`;

