import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expenses";
import { ButtonRemove, EditContainer } from "./styles";

// Creating the edit page component
const EditExpensePage = props => (
  <div>
    <Header />
    <EditContainer>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // Dispatching the EDIT_EXPENSE action
          // Redirect to the dashboard page
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/dashboard");
        }}
      />
      <ButtonRemove
        onClick={() => {
          // Dispatching the remove action and redirecting to the dashboard
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/dashboard");
        }}
        className="btn-remove"
      >
        Remove
      </ButtonRemove>
    </EditContainer>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    // Finding the expense with the match id
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
