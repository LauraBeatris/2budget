import React, { Component } from "react";
import { HomeContainer, FirstColumn, SecondColumn, Google } from "./styles";
import BudgetIllustration from "../../assets/budget_illustration.png";
import User from "../../assets/user.svg";
import Lock from "../../assets/lock.svg";

import { firebase } from "../../firebase/firebase";
import { connect } from "react-redux";
import * as AuthActions from "../../actions/auth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    const { google_auth } = this.props;
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
                  .then(res => {
                    const token = res.credential.accessToken;
                    const user = res.user;

                    this.setState({ error: null });
                    this.props.history.push("/dashboard");
                  })
                  .catch(err => {
                    console.log("Error code: ", err.code);

                    const errors = {
                      "auth/user-not-found": "User not found"
                    };
                    this.setState({ error: errors[err.code] });
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
            <p className="error" id="error-msg">
              {" "}
              {this.state.error}{" "}
            </p>
            <p className="msg-form">Forgot Password?</p>
            <button type="submit" className="login-button">
              Login &gt;
            </button>
          </form>
          <Google
            onClick={ev => {
              google_auth()
                .then(res => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = res.credential.accessToken;
                  // The signed-in user info.
                  var user = res.user;

                  // Storing user data
                  localStorage.setItem({ "auth-token": token });
                  localStorage.getItem({ user });

                  this.setState({ error: null });
                  // Redirecting the user
                  this.props.history.push("/dashboard");
                })
                .catch(err => {
                  var errorCode = err.code;
                  var errorMessage = err.message;
                  var email = err.email;
                  var credential = err.credential;

                  const errors = {
                    "auth/user-not-found": "User not found"
                  };

                  //console.log(errors[err.code]);

                  this.setState({ error: errors[errorCode] });

                  console.log(err.code);
                  console.log("User email used", email);
                  console.log("Credential", credential);
                });
            }}
            className="msg-google"
          >
            Or <span>Login with google</span>
          </Google>
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

const mapDispatchToProps = dispatch => ({
  google_auth: dispatch(AuthActions.startLoginGoogle)
});

export default connect(
  undefined,
  mapDispatchToProps
)(Home);
