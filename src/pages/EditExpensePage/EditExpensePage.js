import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { startRemoveExpenses, startEditExpenses } from "../../actions/expenses";
import { ButtonRemove, EditContainer } from "./styles";

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <Header />
        <Helmet>
          <title> 2Budget | Edit Expense </title>
        </Helmet>
        <EditContainer>
          <ExpenseForm
            type="Edit"
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <ButtonRemove id="remove-button" onClick={this.onClick}>
            Remove
          </ButtonRemove>
        </EditContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // Finding the expense with the match id
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(startEditExpenses(id, expense)),
  removeExpense: expense => dispatch(startRemoveExpenses(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
