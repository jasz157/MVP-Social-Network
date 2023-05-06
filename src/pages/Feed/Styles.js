import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  border: solid #d3d3d3;
  margin: 10px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const PostContent = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  & img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
`;
