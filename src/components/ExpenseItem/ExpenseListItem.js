import React from "react";

import { Link } from "react-router-dom";
import moment from "moment";

// Removing an expense, dispatching the remove expense action
// Every connected element receives the dispatch as a prop

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div className="item-container">
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p className="amount">{amount}</p>
    <p className="createdAt">{moment(createdAt).format("MM/DD/YYYY")}</p>
  </div>
);

export default ExpenseItem;
