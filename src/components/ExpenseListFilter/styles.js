import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  .input-container {
    input:first-child {
      margin-right: 2rem;
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      border-radius: 8px;
      border: 1px solid rgb(77, 81, 94);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

      &::placeholder {
        font-style: italic;
        text-transform: lowercase;
        color: rgb(77, 81, 94);
      }
    }

    select {
      border-radius: 8px;
      border: 1px solid rgb(77, 81, 94);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      color: rgb(77, 81, 94);
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      text-transform: lowercase;
      font-style: italic;

      option:hover {
        background-color: rgb(77, 81, 94, 0.9);
      }
    }
  }

  .date-range {
    margin-top: 2rem;
  }
`;
