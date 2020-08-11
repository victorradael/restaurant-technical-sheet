import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  background: #282a36;
  color: #f8f8f2;

  table {
    border: 1px solid #777;
    width: 100%;
    text-align: center;
    border-radius: 4px;

    td {
      border: 1px solid #777;
      border-radius: 4px;

      transition: 0.4s;
      &:hover {
        background: #6272a4;
        color: #50fa7b;
        border: 1px solid #ffb86c;
      }
    }

    th {
      border: 1px solid #777;
      border-radius: 4px;

      transition: 0.4s;
      &:hover {
        background: #50fa7b;
        color: #6272a4;
        border: 1px solid #ffb86c;
      }
    }
    td {
      border: 1px solid #777;
      border-radius: 4px;

      transition: 0.4s;
      &:hover {
        background: #6272a4;
        color: #50fa7b;
        border: 1px solid #ffb86c;
      }
    }
  }
`;

export const InputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 800px;
`;

export const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-bottom: 0.8rem;

  label {
    color: #bd93f9;
    font-weight: bold;
  }

  input {
    border-radius: 4px;
    height: 1.6rem;
    background: #44475a;
    color: #50fa7b;
    font-weight: bold;
    border: 1px solid #bd93f9;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #ffb86c;
      font-weight: bold;
    }
  }
`;

export const ResultsSection = styled.section`
  text-align: center;
  display: grid;
`;
