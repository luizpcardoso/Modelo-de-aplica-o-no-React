import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  .box {
    height: 300px;
    width: 300px;
    margin: 10% auto;
    border-radius: 15px;
    background-color: #4cc9f010;
    backdrop-filter: blur(8px);
    box-shadow: 2px 2px 5px gray;
  }
`;
