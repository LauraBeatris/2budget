import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 2rem 5rem;
  max-width: 100vw;

  h1.logo {
    color: rgb(77, 81, 94);
    font-size: 2.2rem;
    text-transform: uppercase;

    span {
      color: #6dbfcc;
      font-size: 2.7rem;
    }
  }

  .navbar-wrapper {
    display: flex;
    flex-direction: row;

    align-items: center;

    justify-content: space-between;

    height: 7rem;
  }

  div.navbar-1 {
    display: flex;
    flex-direction: row;

    nav {
      margin-left: 2rem;
      a {
        font-family: inherit;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: bold;
        color: rgb(77, 81, 94);
        cursor: pointer;
        display: inline-block;
        padding: 1rem 1rem;

        &.is-active,
        &:hover {
          color: #6dbfcc;
        }
      }
    }
  }

  div.navbar-2 {
    a {
      font-family: inherit;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: bold;
      color: rgb(77, 81, 94);
      cursor: pointer;
      display: inline-block;
      padding: 1rem 1rem;

      &.is-active,
      &:hover {
        color: #6dbfcc;
      }

      &.logout {
        border-radius: 12px;
        margin-left: 1rem;
        border: 1px solid rgb(77, 81, 94);
      }
    }
  }
`;
