import styled from "styled-components";

export const ButtonRemove = styled.button`
  margin-top: 1rem;
  background-color: #6dbfcc;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 4rem;
  color: white;
  border-radius: 100px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    transform: translateY(-6px);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const EditContainer = styled.div`
  text-align: center;
`;
