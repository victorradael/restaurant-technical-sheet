import styled from "styled-components";

export const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #bd93f9;
  border-radius: 0.4rem;
  padding: 0.4rem;
  margin: 0.4rem 0;
  background: #44475a;

  align-items: center;

  label {
    color: #ffb86c;
    font-weight: bold;
  }

  input {
    border-radius: 4px;
    height: 1.6rem;
    background: #282a36;
    color: #50fa7b;
    font-weight: bold;
    border: 1px solid #ffb86c;
    padding: 0 0.8rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bd93f9;
      font-weight: bold;
    }
  }
`;
