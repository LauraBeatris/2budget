import styled from "styled-components";

export const HomeContainer = styled.section`
  background-color: $background-color;
  padding: 8rem 18rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1040px) {
    width: 100vw;
    position: absolute;
    top: 40%;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;

  @media screen and (max-width: 1040px) {
    text-align: center;
    width: inherit;
  }

  #password,
  #email {
    position: relative;
    margin: 0 auto;
  }

  #email,
  #password {
    span {
      img {
        width: 20px;
      }

      position: absolute;
      top: 10px;
      left: 5%;
    }
  }

  .home-title {
    color: rgb(77, 81, 94);
    font-size: 4.5rem;
    text-transform: uppercase;
    margin-bottom: 8rem;

    span {
      color: #6dbfcc;
      font-size: 5rem;
    }
  }

  form.form-container {
    display: flex;
    flex-direction: column;

    input {
      &:first-child {
        margin-bottom: 4rem;
      }

      color: #a8a9af;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      font-size: 2rem;
      font-weight: lighter;
      padding: 1rem 2rem;
      padding-left: 5rem;
      border: none;
      border-radius: 15px;
      display: inline-block;

      &::placeholder {
        color: #a8a9af;
      }

      @media screen and (max-width: 1040px) {
        width: 75vw;
      }
    }

    #password {
      background-image: url("../../assets/lock.svg");
    }

    p.msg-form {
      margin-top: 5rem;
      font-size: 2rem;
      color: #7f8084;
      font-weight: bold;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .login-button {
      margin-top: 3rem;
      background-color: #6dbfcc;
      border: none;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 2.5rem 4rem;
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

      @media screen and (max-width: 1040px) {
        width: 50vw;
        margin: 3rem auto;
      }
    }
  }

  div.msg-container {
    margin-top: 15rem;
    text-align: left;

    p {
      font-size: 2rem;
      color: #7f8084;
      font-weight: bold;

      span {
        color: rgb(209, 77, 53);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .copy {
      color: rgb(209, 77, 53);
      font-weight: bold;
      margin-top: 0.5rem;

      a {
        color: inherit;
      }
    }
    @media screen and (max-width: 1040px) {
      margin: 15rem auto;

      p {
        font-size: 2.5rem;
      }
    }
  }
`;

export const SecondColumn = styled.div`
  img {
    border-radius: 100px;
    margin-left: 100px;
  }

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;
