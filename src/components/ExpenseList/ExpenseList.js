import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "../ExpenseItem/ExpenseListItem";
import selectExpenses from "../../selectors/expenses";
import { ListContainer } from "./styles";
import moment from "moment";

// Regular unconnect components
export const ExpenseList = props => (
  <ListContainer>
    <div className="summary">
      <p className="moment">{moment().format("MMMM YYYY")}</p>
      <h1 className="total-amount">$208,5</h1>
      <h2>Total Amount</h2>
    </div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))
    )}
  </ListContainer>
);

// Mapping the state to the props of the component
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// Exporting the HOC with the props
export default connect(mapStateToProps)(ExpenseList);
