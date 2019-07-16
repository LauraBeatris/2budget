import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions/expenses";
import { Link } from "react-router-dom";

// Removing an expense, dispatching the remove expense action
// Every connected element receives the dispatch as a prop

const ExpenseItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div className="item-container">
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p className="amount">{amount}</p>
    <p className="createdAt">{createdAt}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

// Exporting the connected component
export default connect()(ExpenseItem);
