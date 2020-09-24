import styled from "styled-components";

export const colors = {
  backgroundColor: "#282a36",
  white: " #f8f8f2",
  green: "#50fa7b",
  grey: "#777",
  greyTwo: "#44475a",
  orange: "#ffb86c",
  purple: "#6272a4",
  purpleTwo: "#bd93f9",
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
    border: 1px solid ${colors.green};
    width: 100%;
    text-align: center;
    border-radius: 0.4rem;

    td {
      border: 1px solid ${colors.grey};
      border-radius: 0.4rem;

      transition: 0.4s;
    }

    th {
      border: 1px solid ${colors.orange};
      border-radius: 0.4rem;
      padding: 0.4rem;

      transition: 0.4s;
      &:hover {
        background: ${colors.green};
        color: ${colors.purple};
        border: 1px solid ${colors.orange};
      }
    }
    td {
      border: 1px solid ${colors.green};
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
  background: ${colors.greyTwo};
  border: 1px solid ${colors.purpleTwo};
  border-radius: 0.4rem;
`;
export const ScreenTwo = styled.div`
  margin: 0.4rem 0;
  background: ${colors.greyTwo};
  border: 1px solid ${colors.purpleTwo};
  border-radius: 0.4rem;
`;
