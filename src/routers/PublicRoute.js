import React, { Fragment } from "react";
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
    <Route
      {...rest}
      component={props => (
        <Fragment>
          <Component {...props} />
        </Fragment>
      )}
    />
  );

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
