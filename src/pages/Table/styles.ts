import styled from "styled-components";

export const colors = {
  backgroundColor: "#3085B3",
  white: " #f8f8f2",
  green: "#50fa7b",
  grey: "#777",
  greyTwo: "#225E7E",
  orange: "#ffa53b",
  orangeTwo: "#f8b96e",
  purple: "#6272a4",
  yellow: "#FFD93B",
};

export const Container = styled.div`
  display: flex;
  font-family: "Recursive", sans-serif;

  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  background: ${colors.backgroundColor};
  color: ${colors.white};

  table {
    border: 2px solid ${colors.orangeTwo};
    width: 100%;
    text-align: center;
    border-radius: 0.4rem;
    background-color: ${colors.greyTwo};
    color: ${colors.yellow};

    td {
      border: 2px solid ${colors.grey};
      border-radius: 0.4rem;

      transition: 0.4s;
    }

    th {
      border: 2px solid ${colors.orange};
      border-radius: 0.4rem;
      padding: 0.4rem;

      transition: 0.4s;
      &:hover {
        background: ${colors.orangeTwo};
        color: ${colors.greyTwo};
        border: 2px solid ${colors.orange};
      }
    }
    td {
      border: 2px solid ${colors.orangeTwo};
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

export const Button = styled.button`
  width: 100%;
  height: 2.4rem;

  background-color: ${colors.orangeTwo};
  border: 2px solid ${colors.orange};

  border-radius: 0.4rem;

  cursor: pointer;
  &:hover {
    background-color: ${colors.orange};
    transition: background-color 0.7s;
  }

  color: ${colors.backgroundColor};
  font-weight: bold;
`;

export const ResultsSection = styled.section`
  text-align: center;
  display: grid;
  margin-left: 0.8rem;
`;

export const ScreenOne = styled.div`
  margin: 0.4rem 0;
  background: ${colors.greyTwo};
  border: 2px solid ${colors.orangeTwo};
  border-radius: 0.4rem;
`;
export const ScreenTwo = styled.div`
  margin: 0.4rem 0;
  background: ${colors.greyTwo};
  border: 2px solid ${colors.orangeTwo};
  border-radius: 0.4rem;
`;
