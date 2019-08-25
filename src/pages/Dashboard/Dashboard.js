import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ExpenseListFilter from "../../components/ExpenseListFilter/ExpenseListFilter";
import { DashboardContainer } from "./styles";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Helmet>
          <title> 2Budget | Dashboard </title>
        </Helmet>
        <DashboardContainer>
          <label>Filters</label>
          <ExpenseListFilter />
          <ExpenseList />
        </DashboardContainer>
      </div>
    );
  }
}
