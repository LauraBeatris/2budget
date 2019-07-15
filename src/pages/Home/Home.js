import React from "react";
import { HomeContainer, FirstColumn, SecondColumn } from "./styles";
import BudgetIllustration from "../../assets/budget-illustration.png";
import User from "../../assets/user.svg";
import Lock from "../../assets/lock.svg";
import { Link } from "react-router-dom";

const Home = () => (
  <HomeContainer>
    <FirstColumn>
      {" "}
      <header>
        <h1 className="home-title">
          <span>2</span>Budget
        </h1>
      </header>
      <form className="form-container">
        <div id="email">
          <input type="text" name="email" placeholder="Email" />
          <span>
            <img src={User} alt="user-cion" />
          </span>
        </div>
        <div id="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <span>
            <img src={Lock} alt="user-cion" />
          </span>
        </div>

        <p className="msg-form">Forgot Password?</p>
        <Link to="/dashboard" className="login-button">
          Login &gt;
        </Link>
      </form>
      <div className="msg-container">
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
        <p className="copy">
          Copyright ©{" "}
          <a href="https://github.com/LauraBeatris" target="_blank">
            Laura Beatris{" "}
          </a>
        </p>
      </div>
    </FirstColumn>

    <SecondColumn>
      <img src={BudgetIllustration} alt="budget-illustration" />
    </SecondColumn>
  </HomeContainer>
);

export default Home;
