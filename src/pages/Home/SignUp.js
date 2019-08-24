import React, { Component } from "react";
import { HomeContainer, FirstColumn } from "./styles-signup";
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
            className="
            form-container"
          >
            <p id="subtitle"> Create your account </p>
            <label>Type your email:</label>
            <div id="email">
              <input
                type="text"
                ref={input => (this.email = input)}
                name="email"
                placeholder="Email"
              />
              <span>
                <img src={User} alt="user-icon" />
              </span>
            </div>
            <label>Type your password:</label>
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

            <div id="button-container">
              <button type="submit" className="login-button">
                Sign Up &gt;
              </button>
            </div>
          </form>
          <div className="msg-container">
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
      </HomeContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  google_auth: () => dispatch(AuthActions.startLoginGoogle())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Home);
