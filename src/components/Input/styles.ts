import styled from "styled-components";

export const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #f8b96e;
  border-radius: 0.4rem;
  padding: 0.4rem;
  margin: 0.4rem 0;
  background: #225e7e;

  align-items: center;

  label {
    color: #ffa53b;
    font-weight: bold;
  }

  input {
    border-radius: 4px;
    height: 1.6rem;
    background: #06537d;
    color: #50fa7b;
    font-weight: bold;
    border: 2px solid #ffa53b;
    padding: 0 0.8rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #22a0e4;
      font-weight: bold;
    }
  }
`;
