import styled from "styled-components";

export const TopBar = styled.header`
  display: flex;
  justify-content: flex-start;
  min-height: 30px;
  width: 100%;

  padding: 10px 10px;
  color: rgb(20, 167, 240);
  font-size: 18px;
  font-weight: 600;
  line-height: 60px;
  border-bottom: 0.2rem ridge rgba(118, 190, 213, 0.6);

  > div {
    margin: 0 10px;
  }

  img {
    height: 60px;
  }
`;