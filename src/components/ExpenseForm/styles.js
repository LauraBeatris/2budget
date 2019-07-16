import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  .description-amount {
    padding: 1rem;
    margin-bottom: 2rem;

    input:first-child {
      margin-right: 1rem;
      border-radius: 8px;
      border: 1px solid rgb(77, 81, 94);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      color: rgb(77, 81, 94);
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      text-transform: lowercase;
      font-style: italic;
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

      &::placeholder {
        font-weight: lighter;
      }
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

    &::placeholder {
      font-weight: bold;
      color: #6dbfcc;
      font-family: "Raleway";
    }
  }

  .datepicker {
    background-color: red;
  }
`;
