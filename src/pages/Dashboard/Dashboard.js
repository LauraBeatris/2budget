import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ExpenseListFilter from "../../components/ExpenseListFilter/ExpenseListFilter";
import { DashboardContainer } from "./styles";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardContainer>
          <label>Filters</label>
          <ExpenseListFilter />
          <ExpenseList />
        </DashboardContainer>
      </div>
    );
  }
}
