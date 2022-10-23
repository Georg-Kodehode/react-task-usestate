import styled from "styled-components";

export const CounterMain = styled.main`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  color: #f2e9e4;
`;

export const CounterWrapper = styled.div`
  width: 60%;
  height: 450px;
  margin-top: 2rem;
  background-color: #4a4e69;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CounterHeader = styled.h2`
  color: #c9ada7;
`;

export const CounterBtnWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

// Palette used in app: https://coolors.co/palette/22223b-4a4e69-9a8c98-c9ada7-f2e9e4
