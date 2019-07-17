import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .msg-error {
    font-size: 1.5rem;
    color: rgb(209, 77, 53);
    margin-bottom: 1rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  .description-amount {
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: center;

    input:first-child {
      margin-right: 1rem;
      border-radius: 8px;
      border: 1px solid rgb(77, 81, 94);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      color: rgb(77, 81, 94);
      font-style: italic;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      text-transform: lowercase;
      font-style: italic;
      &::placeholder {
        font-weight: lighter;
        color: rgb(77, 81, 94);
      }
    }

    input:last-child {
      padding: 5px 10px;
      width: 100px;
      font-style: italic;
      font-weight: lighter;
      background-color: transparent;
      border: none;
      color: rgb(77, 81, 94);
      font-size: 1.8rem;
      border-bottom: 1px solid rgb(77, 81, 94);
    }
  }

  .note {
    border: 1px solid rgb(77, 81, 94, 0.9);
    background-color: #fff;
    overflow: auto;
    resize: none;
    padding: 2rem 2rem;
    border-radius: 15px;
    text-align: center;
    font-size: 2rem;
    color: #6dbfcc;
    margin-bottom: 2rem;

    &::placeholder {
      font-weight: bold;
      color: #6dbfcc;
      font-family: "Raleway";
    }
  }

  button.btn-submit {
    margin-top: 3rem;
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
  }
`;
