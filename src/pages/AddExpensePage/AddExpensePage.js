import React from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import Header from "../../components/Header/Header";

// Creating the add page component
const AddExpensePage = () => (
  <div>
    <Header />
    <div>
      <h1>Add a expense page</h1>
      <ExpenseForm />
    </div>
  </div>
);

export default AddExpensePage;
