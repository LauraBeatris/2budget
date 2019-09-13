import styled from "styled-components";

export const ButtonRemove = styled.button`
  margin-top: 0.5rem;
  background-color: #6dbfcc;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 4rem;
  color: white;
  border-radius: 20px;
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
  margin-top: 5rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem;

  p {
    color: #6dbfcc;
    font-weight: 600;
    font-size: 1.7rem;
  }

  div {
    margin-top: 1.5rem;
    display: inherit;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;

    button {
      background-color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      border: 1px solid rgb(77, 81, 94);
      color: #6dbfcc;
      padding: 1rem 3rem;
      font-weight: 500;
      transition: all 0.35s;

      &:hover {
        cursor: pointer;
        transform: translateY(-6px);
      }
    }
  }
`;
