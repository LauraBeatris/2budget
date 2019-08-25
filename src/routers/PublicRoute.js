import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) =>
  isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route {...rest} component={props => <Component {...props} />} />
  );

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
