import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Recursive", sans-serif;

  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  background: #282a36;
  color: #f8f8f2;

  table {
    border: 1px solid #50fa7b;
    width: 100%;
    text-align: center;
    border-radius: 0.4rem;

    td {
      border: 1px solid #777;
      border-radius: 0.4rem;

      transition: 0.4s;
    }

    th {
      border: 1px solid #ffb86c;
      border-radius: 0.4rem;
      padding: 0.4rem;

      transition: 0.4s;
      &:hover {
        background: #50fa7b;
        color: #6272a4;
        border: 1px solid #ffb86c;
      }
    }
    td {
      border: 1px solid #50fa7b;
      border-radius: 0.4rem;
      padding: 0.4rem;

      transition: 0.4s;
    }
  }
`;

export const InputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 880px;
  margin-bottom: 1.6rem;
  padding: 0.8rem;
`;

export const ResultsSection = styled.section`
  text-align: center;
  display: grid;
  margin-left: 0.8rem;
`;

export const ScreenOne = styled.div`
  margin: 0.4rem 0;
  background: #44475a;
  border: 1px solid #bd93f9;
  border-radius: 0.4rem;
`;
export const ScreenTwo = styled.div`
  margin: 0.4rem 0;
  background: #44475a;
  border: 1px solid #bd93f9;
  border-radius: 0.4rem;
`;
