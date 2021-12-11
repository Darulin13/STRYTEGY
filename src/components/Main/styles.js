import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200vh;
`;
export const Sec1 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div {
    width: 45%;
  }
  h1 {
    font-size: 57px;
  }
  p {
    font-size: 28px;
  }
  button {
    border: none;
    border-radius: 10%;
    font-size: 20px;
    height: 9vh;
    width: 40%;
    background-color: yellow;
    align-items: center;
  }
  img {
    width: 45%;
  }
`;
export const Sec2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: beige;
  h1 {
    font-size: 57px;
  }
  p {
    font-size: 28px;
    width: 65%;
    text-align: center;
  }
  button {
    font-size: 28px;
    width: 65%;
    text-align: center;
    height: 14vh;
    background-color: white;
    border-right: none;
  }
  button:hover {
    background-color: yellow;
  }
  div {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    border-radius: 2%;
    background-color: white;
    height: 15vh;
    align-items: center;
  }
  .barra {
    border-right: 1px solid;
    border-left: 1px solid;
  }
  .barra2 {
    border-left: 1px solid;
  }
`;
export const Sec3 = styled.section``;
export const Sec4 = styled.section``;
