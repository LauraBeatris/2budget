import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// ...rest -> get all of the stuff that we didn't destructure
//  (rest is just the variable name) it can be other name too

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Fragment>
          <Header />
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToProps)(PrivateRoute);
