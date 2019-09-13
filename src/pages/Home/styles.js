import styled from "styled-components";

export const HomeContainer = styled.section`
  background-color: $background-color;
  padding: 8rem 18rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1040px) {
    margin: 4rem auto;
  }

  .google-msg {
    p span {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;

  @media screen and (max-width: 1020px) {
    text-align: center;
    width: inherit;
  }

  #password,
  #email {
    position: relative;
    margin: 0 auto;

    input {
      border: 1px solid rgb(77, 81, 94);
    }
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

      @media screen and (max-width: 1020px) {
        left: 2.5%;
      }
    }
  }

  .home-title {
    color: rgb(77, 81, 94);
    font-size: 4.5rem;
    text-transform: uppercase;
    margin-bottom: 4rem;

    span {
      color: #6dbfcc;
      font-size: 5rem;
    }
  }

  form.form-container {
    display: flex;
    flex-direction: column;

    &--signup {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    input {
      &:first-child {
        margin-bottom: 4rem;
      }

      color: #a8a9af;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
      font-weight: lighter;
      padding: 1rem 2rem;
      padding-left: 4rem;
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

    p#error-msg {
      font-size: 1.5rem;
      font-weight: bold;
      color: red;
      margin: 1rem 0rem;
    }

    p.msg-form {
      margin-top: 0.5rem;
      font-size: 2rem;
      color: #7f8084;
      font-weight: bold;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .login-button {
      margin-top: 2rem;
      background-color: #6dbfcc;
      border: none;
      font-size: 1.8rem;
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

      @media screen and (max-width: 1040px) {
        width: 50vw;
        margin: 1.5rem auto;
      }
    }
  }

  div.msg-container {
    margin-top: 5rem;
    text-align: center;

    p {
      font-size: 1.5rem;
      color: #7f8084;
      font-weight: bold;

      a {
        color: rgb(209, 77, 53);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .copy {
      color: rgb(209, 77, 53);
      font-weight: 700;
      margin-top: 0.5rem;

      a {
        color: inherit;
      }
    }
    @media screen and (max-width: 1040px) {
      margin: 10rem auto;

      p {
        font-size: 1.9rem;
      }
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  #button-container {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 70%;
    }
  }

  #login-msg {
    margin: 1rem 0;
    font-size: 2rem;
    color: #7f8084;
    font-weight: bold;
    font-size: 1.6rem;
  }

  #social-medias-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #social-medias {
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      width: 2.5rem;
      &:not(:first-child) {
        margin-left: 1rem;
      }

      cursor: pointer;
      transition: all 0.25s;

      &:hover,
      &:focus {
        transform: scale(1.1);
      }
    }
  }

  #form-container-signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      &:first-child {
        margin-bottom: 4rem;
      }

      color: #a8a9af;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
      font-weight: lighter;
      padding: 1rem 2rem;
      padding-left: 4rem;
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
  }
`;

export const SecondColumn = styled.div`
  img {
    border-radius: 100px;
    margin-left: 100px;
    height: 50rem;
  }

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const Google = styled.a`
  font-size: 1.5rem;
  color: #7f8084;
  margin-top: 2rem;
  font-weight: 700;

  span {
    text-decoration: underline;
    color: rgb(209, 77, 53);
    cursor: pointer;
  }
`;
