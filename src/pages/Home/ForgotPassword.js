import React, { Component } from "react";
import { firebase } from "../../firebase/firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import * as AuthActions from "../../actions/auth";

import { HomeContainer, FirstColumn } from "./styles-forgot";
import User from "../../assets/user.svg";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      success: false
    };
  }

  render() {
    const { reset_password } = this.props;

    return (
      <HomeContainer>
        <Helmet>
          <title> 2Budget | Forgot Password </title>
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

              if (!this.email.value) {
                this.setState({ error: "Empty email" });
              } else {
                reset_password(this.email.value)
                  .then(() => {
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
            <p id="subtitle"> Forgot your password? </p>
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
            {this.state.error ? (
              <p className="error" id="error-msg">
                {this.state.error}
              </p>
            ) : null}
            {this.state.success ? (
              <p className="error" id="error-msg">
                {this.state.success}
              </p>
            ) : null}

            <div id="button-container">
              <button type="submit" className="login-button">
                Send password reset email &gt;
              </button>
            </div>
          </form>
        </FirstColumn>
      </HomeContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  reset_password: email => dispatch(AuthActions.startPasswordReset(email))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ForgotPassword);
