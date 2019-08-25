import React from "react";
import GlobalStyle from "../styles/global";
import createHistory from "history/createBrowserHistory";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Home/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage";

import EditExpensePage from "../pages/EditExpensePage/EditExpensePage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Router, Route, Switch } from "react-router-dom";

// We can use not only on app router but at other files
export const history = createHistory();

// Creating the router
const AppRouter = () => (
  <Router history={history}>
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2budget" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} /> {/* This is always a match */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
