import styled from "styled-components";

export const DashboardContainer = styled.div`
  text-align: center;
  margin-top: 3rem;

  label {
    font-size: 2rem;
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
