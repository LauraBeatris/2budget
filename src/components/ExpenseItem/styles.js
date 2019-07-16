import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  font-size: 2rem;
  padding: 1rem 1rem;
  border-bottom: 1px solid rgb(77, 81, 94);
  transition: all 0.25s;

  &:hover {
    transform: scale(1.05);
  }

  a.description {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #6dbfcc;
    font-weight: 600;
  }

  p {
    color: rgb(77, 81, 94);
    font-weight: 500;
  }
`;
