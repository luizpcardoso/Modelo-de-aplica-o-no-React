import styled from "styled-components";

export const Container = styled.div`
  height: 89vh;
  width: 100vw;
  display: flex;
  background-color: #f5f5f5;
  justify-content: space-around;

  .menu {
    height: 100%;
    width: 15%;
    background-color: #660708;
  }
  .products {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 620px;
    height: 70%;
    margin: 10px 0 0 100px;
    overflow-x: auto;
  }
  h2 {
    color: #660708;
  }
  .detail {
    height: 70%;
    width: 400px;
    border-radius: 10px;
    background-color: #6a040f;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 100px 0 0;
  }
  .volumeTitle {
    font-size: 24px;
    margin: 30px 0 0 0;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    .selected__products {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
    }

    .products {
      height: 320px;
      width: 100vw;
      margin: 0;
    }

    .detail {
      height: 320px;
      margin: 20px 0 0 0;
    }
  }
`;
