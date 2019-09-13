import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 2rem 4rem;
  max-width: 100vw;

  #logo-container {
    text-decoration: none;
  }

  h1.logo {
    color: rgb(77, 81, 94);
    font-size: 2.2rem;
    text-transform: uppercase;
    cursor: pointer;

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

      @media screen and (max-width: 48rem) {
        display: none;
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

export const Hamburger = styled.nav`
  display: none;

  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: row;
  }

  h1 {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 6;
    color: rgb(77, 81, 94);
    font-size: 2.2rem;
    text-transform: uppercase;

    > span {
      text-transform: none;
      opacity: .5;
      font-weight: 300;
      font-size: 12px;
    }
  }

    span {
      color: #6dbfcc;
      font-size: 2.7rem;
    }
  }

  input + label {
    position: fixed;
    top: 45px;
    right: 70px;
    height: 20px;
    width: 15px;
    z-index: 5;
    span {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 50%;
      margin-top: -1px;
      left: 0;
      display: block;
      background: rgb(77, 81, 94);
      transition: 0.5s;
    }
    span:first-child {
      top: 3px;
    }
    span:last-child {
      top: 16px;
    }
  }
  label:hover {
    cursor: pointer;
  }
  input:checked + label {
    span {
      opacity: 0;
      top: 50%;
    }
    span:first-child {
      opacity: 1;
      transform: rotate(405deg);
    }
    span:last-child {
      opacity: 1;
      transform: rotate(-405deg);
    }
  }
  input ~ nav {
    position: fixed;
    background: white;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 3;
    transition: 0.5s;
    transition-delay: 0.5s;
    overflow: hidden;
    > ul {
      text-align: center;
      position: absolute;
      top: 35%;
      left: 20%;
      right: 20%;
      list-style: none;
      > li {
        opacity: 0;
        transition: 0.5s;
        transition-delay: 0s;
        > a {
          text-decoration: none;
          text-transform: uppercase;
          color: $blackColor;
          font-weight: 700;
          font-family: sans-serif;
          display: block;
          padding: 30px;
        }
      }
    }
  }
  input:checked ~ nav {
    height: 100%;
    transition-delay: 0s;
    > ul {
      > li {
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
  

  

  
`;
