import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20%;
  min-height: 100px;
  background-color: #6a040f;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  .logo {
    display: flex;
    align-items: baseline;
  }
  .logo h1 {
    font-family: "Oswald", sans-serif;
    font-size: 30px;
  }
  .logo span {
    font-size: 18px;
  }

  ul {
    display: flex;
    margin: 0 30px 0 0;
    height: 100%;
  }

  ul li {
    list-style: none;
    margin: 0 10px 0 10px;
    font-size: 20px;
    height: 100%;
  }
  ul li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .logo {
    margin: 0 0 0 50px;
    font-size: 26px;
    font-weight: bold;
  }
  .logo:hover {
    cursor: pointer;
  }
  .yellowBollcas,
  .yellowBollconf,
  .yellowBollform {
    position: absolute;
    background-color: yellow;
    color: black;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .yellowBollconf {
    margin: -30px 0px 0px 150px;
  }
  .yellowBollcas {
    margin: -30px 0px 0px 95px;
  }
  .yellowBollform {
    margin: -30px 0px 0px 90px;
  }

  @media (max-width: 720px) {
    width: 100vw;
    flex-direction: column;
  }
  ul li {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .yellowBollconf {
    margin: -30px 0px 0px 100px;
  }
  .yellowBollcas {
    margin: -30px 0px 0px 65px;
  }
  .yellowBollform {
    margin: -30px 0px 0px 60px;
  }
`;
