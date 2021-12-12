import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400vh;
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
    color: #191970;
  }
  p {
    font-size: 28px;
    color: #191970;
  }
  button {
    border: none;
    border-radius: 10%;
    font-size: 20px;
    height: 9vh;
    width: 40%;
    background-color: #ffd700;
    align-items: center;
    color: #191970;
  }
  img {
    width: 45%;
  }
`;
export const Sec2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: beige;
  h1 {
    font-size: 57px;
    color: #191970;
  }
  p {
    color: #191970;
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
    color: #191970;
  }
  button:hover {
    background-color: #ffd700;
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
export const Sec3 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #191970;
  div {
    width: 30%;
  }
  h1 {
    font-size: 40px;
    color: white;
  }
  p {
    font-size: 21px;
    color: white;
  }
  img {
    width: 30%;
  }
`;
export const Sec4 = styled.section`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div {
    width: 40%;
  }
  h1 {
    font-size: 56px;
    font-weight: 700;
    color: #191970;
  }
  p {
    font-weight: 100;
    font-size: 28px;
    color: #191970;
  }

  img {
    width: 40%;
  }
`;
export const Sec5 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120vh;
  img {
    width: 60%;
  }
  h1 {
    font-size: 57px;
    color: #191970;
  }
  ul {
    height: 60vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li {
    text-align: center;
    font-weight: 100;
    font-size: 28px;
    color: #191970;
  }
`;

export const Sec6 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    border: solid;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    color: #191970;
  }
  p {
  }
  img {
    width: 80%;
    border: solid green;
  }
  article {
    display: flex;
    flex-direction: column;
    border: solid blue;
    align-items: center;
  }
  picture {
    border: solid red;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-self: start;
  }
  .symbol {
    border-radius: 50%;
    width: 20%;
  }
`;
