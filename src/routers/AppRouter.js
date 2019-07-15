import React from "react";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage";
import HelpPage from "../pages/HelpPage/HelpPage";
import EditExpensePage from "../pages/EditExpensePage/EditExpensePage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Creating the router
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} /> {/* This is always a match */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
