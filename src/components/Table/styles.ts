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
    border-radius: 8px;

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
