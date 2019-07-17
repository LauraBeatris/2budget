import React from "react";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage";

import EditExpensePage from "../pages/EditExpensePage/EditExpensePage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Creating the router
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2budget" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} /> {/* This is always a match */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
