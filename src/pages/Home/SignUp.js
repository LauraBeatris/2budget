import React, { Component } from "react";
import { firebase } from "../../firebase/firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import * as AuthActions from "../../actions/auth";

import { HomeContainer, FirstColumn } from "./styles-signup";
import User from "../../assets/user.svg";
import Lock from "../../assets/lock.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      success: false
    };
  }

  render() {
    const { google_auth } = this.props;
    return (
      <HomeContainer>
        <Helmet>
          <title> 2Budget | Sign up </title>
        </Helmet>
        <FirstColumn>
          {" "}
          <header>
            <Link id="back-button" to="/">
              &#8629; Back
            </Link>
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
                  .createUserWithEmailAndPassword(
                    this.email.value,
                    this.password.value
                  )
                  .then(res => {
                    this.setState({ error: null });

                    this.setState({ success: true });

                    setTimeout(() => {
                      this.props.history.push("/");
                    }, 1500);
                  })
                  .catch(err => {
                    console.log("Error code: ", err);
                    this.setState({ success: false });
                    // const errors = {
                    //   "auth/user-not-found": "User not found"
                    // };
                    // this.setState({ error: errors[err.code] });
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
            </div>{" "}
            {this.state.error ? (
              <p className="error" id="error-msg">
                {" "}
                this.state.error{" "}
              </p>
            ) : null}{" "}
            {this.state.success ? (
              <p className="success" id="success-msg">
                Successfully signup <span>😊</span>
              </p>
            ) : null}
            <div id="button-container">
              <button type="submit" className="login-button">
                Sign Up &gt;
              </button>
            </div>
          </form>
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
