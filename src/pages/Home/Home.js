import React, { Component } from "react";
import { HomeContainer, FirstColumn, SecondColumn } from "./styles";
import { Link } from "react-router-dom";
import { firebase } from "../../firebase/firebase";
import { connect } from "react-redux";
import * as AuthActions from "../../actions/auth";
import Helmet from "react-helmet";

import BudgetIllustration from "../../assets/budget_illustration.png";
import Github from "../../assets/github-logo.png";
import GoogleIcon from "../../assets/google.png";
import User from "../../assets/user.svg";
import Lock from "../../assets/lock.svg";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleGithubAuth = () => {
    this.props
      .github_auth()
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
      })
      .catch(err => {
        var errorCode = err.code;
        var errorMessage = err.message;
        var email = err.email;
        var credential = err.credential;
        console.log(credential);
        const errors = {
          "auth/user-not-found": "User not found",
          "auth/account-exists-with-different-credential":
            "Email already in use with another account"
        };

        //console.log(errors[err.code]);

        this.setState({ error: errors[errorCode] });

        console.log(err.code);
        console.log("User email used", email);
        console.log("Credential", credential);
      });
  };

  render() {
    const { google_auth } = this.props;
    return (
      <HomeContainer>
        <Helmet>
          <title> 2Budget | Sign in </title>
        </Helmet>
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
                    this.setState({ error: null });
                  })
                  .catch(err => {
                    const errors = {
                      "auth/user-not-found": "User not found",
                      "auth/wrong-password": "Wrong password"
                    };
                    console.log(err.code);
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
              {this.state.error ? this.state.error : null}{" "}
            </p>
            <p className="msg-form">Forgot Password?</p>
            <button type="submit" className="login-button">
              Login &gt;
            </button>
          </form>
          <div id="social-medias-container">
            <p id="login-msg"> Or login with </p>
            <div id="social-medias">
              <img
                src={GoogleIcon}
                id="google-auth"
                onClick={ev => {
                  {
                    process.env.NODE_ENV !== "test" &&
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
                  }

                  {
                    process.env.NODE_ENV === "test" && google_auth();
                  }
                }}
                alt="google"
              />
              <img src={Github} onClick={this.handleGithubAuth} alt="github" />
            </div>
          </div>
          <div className="msg-container">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
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
  google_auth: () => dispatch(AuthActions.startLoginGoogle()),
  github_auth: () => dispatch(AuthActions.startLoginGithub())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Home);
