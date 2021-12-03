import styled from "styled-components";

export const Container = styled.div`
  height: 390px;
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  justify-content: space-between;
  animation-duration: 1.5s;
  animation-name: opacity;

  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .imgContainer img {
    height: 100%;
    width: auto;
  }
  h3 {
    margin: 10px 0 3px 0;
  }

  .imgContainer {
    height: 160px;
    width: 80px;
    margin: 15px 0 0 0;
  }

  .date {
    font-size: 12px;
  }

  .description {
    font-size: 14px;
    text-align: justify;
    width: 80%;
    overflow-y: auto;
    height: 80px;
  }
  .Volume {
    font-weight: bold;
    margin: 15px 0 0 0;
  }
  .buttonsDisplay {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60px;
    margin-top: 5px;
  }
  .buttonAdd {
    border: none;
    background-color: #660708;
    color: #ffffff;
    font-weight: bold;
    height: 60px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    font-size: 16px;
  }

  .buttonTypes,
  .buttonTypesLast {
    border: none;
    background-color: #660708;
    color: #ffffff;
    font-weight: bold;
    height: 21px;
    width: 100%;
    animation: slide 1s;
    font-size: 12px;
  }
  .buttonTypesLast {
    border-radius: 0 0 10px 10px;
  }

  .buttonTypes:hover,
  .buttonTypesLast:hover,
  .buttonAdd:hover {
    background-color: #a4161a;
    transition: 0.3s;
  }
  @keyframes slide {
    from {
      height: 0;
    }

    to {
      height: 100%;
    }
  }
  .buttonTypes:active,
  .buttonTypesLast:active {
    background-color: #ffffff;
  }
`;
