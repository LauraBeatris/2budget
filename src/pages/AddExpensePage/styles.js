import styled from "styled-components";

export const AddContainer = styled.div`
  text-align: center;

  .add-title {
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: 100;
    color: rgb(77, 81, 94);
  }

  animation-name: goin;
  animation-duration: 0.5s;

  @keyframes goin {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
