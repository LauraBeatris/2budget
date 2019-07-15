import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "../ExpenseItem/ExpenseListItem";
import selectExpenses from "../../selectors/expenses";

// Regular unconnect components
const ExpenseList = props => (
  <div className="list-container">
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseItem key={expense.id} {...expense} />
    ))}
  </div>
);

// Mapping the state to the props of the component
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// Exporting the HOC with the props
export default connect(mapStateToProps)(ExpenseList);
