import styled from "styled-components";

export const Container = styled.div`
  height: 89vh;
  width: 100vw;
  display: flex;
  background-color: #f5f5f5;

  .menu {
    height: 100%;
    width: 15%;
    background-color: #6a040f;
    border-top: 1px solid #ffffff;
    animation: slideLeftmenu 1s;
  }

  @keyframes slideLeftmenu {
    from {
      margin-right: 100%;
      width: 0%;
    }

    to {
      margin-right: 0%;
      width: 15%;
    }
  }
  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
    margin: 10px 0 0 10px;
    justify-content: center;
  }
  .pageLeft,
  .pageRight {
    width: 50px;
    margin: auto auto;
  }
  .pageLeft button,
  .pageRight button {
    border-radius: 100%;
    border: none;
    height: 30px;
    width: 30px;
    background-color: #6a040f;
    display: flex;
    align-items: center;
    margin: auto;
  }

  .pageLeft button svg,
  .pageRight button svg {
    height: 20px;
    width: 20px;
    color: #ffffff;
  }

  .pageLeft button:hover,
  .pageRight button:hover {
    background-color: #a4161a;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    .menu {
      display: none;
    }
    .products {
      flex-direction: column;
      overflow-y: auto;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
`;
