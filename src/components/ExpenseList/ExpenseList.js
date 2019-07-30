import React from "react";
import { connect } from "react-redux";
import {getVisibleExpenses} from "../../selectors/expenses";
import { ListContainer } from "./styles";
import ExpenseItem from "../ExpenseItem/ExpenseListItem";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";


// Regular unconnect components
export const ExpenseList = props => (
  <ListContainer>
    <ExpensesSummary />
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
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

// Exporting the HOC with the props
export default connect(mapStateToProps)(ExpenseList);
