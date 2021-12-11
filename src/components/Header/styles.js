import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  border-bottom: 2px inset;
  div {
    width: 30%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  nav {
    width: 30%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  picture {
    border: solid 1px;
    border-radius: 50%;
    padding: 4px;
  }
  p {
    font-size: 20px;
  }
  img {
    width: 30%;
  }
  button {
    border: none;
    border-radius: 10%;
    font-size: 20px;
    height: 7vh;
    width: 30%;
    background-color: yellow;
  }
  p:hover {
    border-bottom: 2px solid;
  }
`;
