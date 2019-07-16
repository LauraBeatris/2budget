import React from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";

// Creating the add page component
const AddExpensePage = props => (
  <div>
    <Header />
    <div>
      <h1>Add a expense page</h1>
      <ExpenseForm
        // Dispatching the action ADD_EXPENSE to the redux store
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          // Redirecting to dashboard page
          props.history.push("/dashboard");
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);
