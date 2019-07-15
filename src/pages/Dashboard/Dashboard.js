import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ExpenseListFilter from "../../components/ExpenseListFilter/ExpenseListFilter";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <ExpenseListFilter />
          <ExpenseList />
        </div>
      </div>
    );
  }
}
