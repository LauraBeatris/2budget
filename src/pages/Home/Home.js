import React, { Component } from "react";
import { HomeContainer, FirstColumn, SecondColumn } from "./styles";
import BudgetIllustration from "../../assets/budget_illustration.png";
import User from "../../assets/user.svg";
import Lock from "../../assets/lock.svg";

import { firebase } from "../../firebase/firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActions from "../../actions/auth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    const { startAuthGoogle } = this.props;
    return (
      <HomeContainer>
        <FirstColumn>
          {" "}
          <header>
            <h1 className="home-title">
              <span>2</span>Budget
            </h1>
          </header>
          <form
            onSubmit={ev => {
              ev.preventDefault();

              if (!this.password.value) {
                this.setState({ error: "Empty password" });
              } else if (!this.email.value) {
                this.setState({ error: "Empty email" });
              } else {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(
                    this.email.value,
                    this.password.value
                  )
                  .catch(err => {
                    console.log("Error code: ", err.code);
                    console.log("Error message: ", err.message);
                  });
              }
            }}
            className="form-container"
          >
            <div id="email">
              <input
                type="text"
                ref={input => (this.email = input)}
                name="email"
                placeholder="Email"
              />
              <span>
                <img src={User} alt="user-cion" />
              </span>
            </div>
            <div id="password">
              <input
                id="password"
                type="password"
                ref={input => (this.password = input)}
                name="password"
                placeholder="Password"
              />
              <span>
                <img id="user" src={Lock} alt="user-cion" />
              </span>
            </div>

            <p className="msg-form">Forgot Password?</p>
            <button type="submit" className="login-button">
              Login &gt;
            </button>
          </form>
          <div className="msg-container">
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
            <p className="copy">
              Copyright ©{" "}
              <a
                href="https://github.com/LauraBeatris"
                target="_blank"
                rel="noopener noreferrer"
              >
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
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  undefined,
  mapDispatchToProps
)(Home);
