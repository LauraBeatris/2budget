import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 4rem;

  .summary {
    line-height: 1;
    margin-bottom: 4rem;
    color: #6dbfcc;
    h1.total-amount {
      font-weight: 400;
      font-size: 6.5rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .moment, .quantity {
      font-size: 1.8rem;

      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 45rem) {
    margin: 2rem auto;
  }
`;
