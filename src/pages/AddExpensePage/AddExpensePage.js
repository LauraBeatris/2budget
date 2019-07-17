import React from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";
import { AddContainer } from "./styles";

// Creating the add page component
const AddExpensePage = props => (
  <div>
    <Header />
    <AddContainer>
      <h1 className="add-title">Add a expense</h1>
      <ExpenseForm
        // Dispatching the action ADD_EXPENSE to the redux store
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          // Redirecting to dashboard page
          props.history.push("/dashboard");
        }}
      />
    </AddContainer>
  </div>
);

export default connect()(AddExpensePage);
