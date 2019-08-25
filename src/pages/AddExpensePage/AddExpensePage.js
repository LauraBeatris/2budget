import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpenseRequest } from "../../actions/expenses";
import Helmet from "react-helmet";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";

import { AddContainer } from "./styles";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
    // Redirecting to dashboard page
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <Helmet>
          <title> 2Budget | Add expense </title>
        </Helmet>
        <AddContainer>
          <h1 className="add-title">Add a expense</h1>
          <ExpenseForm
            type="Add"
            // Dispatching the action ADD_EXPENSE to the redux store
            onSubmit={this.onSubmit}
          />
        </AddContainer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpenseRequest(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
