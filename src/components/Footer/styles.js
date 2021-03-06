import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 150vh;
  background-color: #e6e6fa;
`;
export const Sec = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  div {
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  h1 {
    font-size: 57px;
    color: #191970;
    font-weight: 700;
  }
  button {
    border: none;
    border-radius: 2%;
    font-size: 20px;
    height: 8vh;
    width: 30%;
    background-color: #ffd700;
    color: #191970;
  }
  p {
    font-weight: 100;
    font-size: 25px;
    color: #191970;
    text-align: center;
  }
`;
export const Sec2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;

  div {
    border-top: 1px inset black;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  article {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    width: 70%;
    display: flex;
    flex-direction: column;

    align-items: start;
  }
  nav {
    display: flex;
    flex-direction: column;

    align-items: start;
  }
  h2 {
    font-size: 30px;
    color: #191970;
    font-weight: 600;
  }
  .paragraph {
    font-size: 15px;
    color: #191970;
    font-weight: 200;
    text-align: start;
  }
  picture {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    align-items: center;
  }
  img {
    width: 40%;
  }
  p {
    font-size: 13px;
    color: #191970;
    font-weight: 200;
    text-align: start;
  }
`;
