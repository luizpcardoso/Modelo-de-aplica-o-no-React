import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  width: 600px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
  border-radius: 5px;
  justify-content: space-between;
  animation: slideLeft 1s;

  @keyframes slideLeft {
    from {
      margin-left: 100%;
      width: 0;
    }

    to {
      margin-left: 0%;
      width: 600px;
    }
  }

  .imgContainer img {
    height: 100%;
    width: auto;
  }
  h3 {
    margin: 10px 0 3px 0;
    font-size: 22px;
    max-width: 250px;
  }
  .textImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
  }

  .imgContainer {
    height: 150px;
    width: 80px;
    margin: 15px 0 0 0;
  }

  .titleCenter {
    display: flex;
    flex-direction: column;
  }

  .date {
    font-size: 14px;
  }

  .description {
    font-size: 14px;
    text-align: justify;
    width: 350px;
    overflow-y: auto;
    height: 100px;
  }
  .Volume {
    font-weight: bold;
    margin: 15px 0 0 0;
  }
  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px 0 0;
  }
  .remove {
    height: 20px;
    width: 70px;
    border: none;
    background-color: #660708;
    color: #ffffff;
    border-radius: 5px;
  }
  .remove:hover {
    background-color: #ffffff;
    color: #660708;
    border: solid 2px #660708;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    width: 400px;
    margin: 10px auto;
    height: 200px;
  }
`;
