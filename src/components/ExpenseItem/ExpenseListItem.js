import React from "react";
import { ItemContainer } from "./styles";
import { Link } from "react-router-dom";
import moment from "moment";

// Removing an expense, dispatching the remove expense action
// Every connected element receives the dispatch as a prop

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <ItemContainer>
    <Link className="description" to={`/edit/${id}`}>
      {description}
    </Link>
    <p className="amount">${amount}</p>
    <p className="createdAt">{moment(createdAt).format("MM/DD/YYYY")}</p>
  </ItemContainer>
);

export default ExpenseItem;
