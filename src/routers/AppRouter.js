import React from "react";
import GlobalStyle from "../styles/global";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import ForgotPassword from "../pages/Home/ForgotPassword";
import SignUp from "../pages/Home/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage";
import EditExpensePage from "../pages/EditExpensePage/EditExpensePage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// We can use not only on app router but at other files
export const history = createHistory();

// Creating the router
const AppRouter = () => (
  <Router history={history}>
    <div>
      <GlobalStyle />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/2budget" component={Home} />
        <PublicRoute path="/signup" component={SignUp} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} /> {/* This is always a match */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
