import React from "react";
import { ItemContainer } from "./styles";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <ItemContainer>
    <Link className="description" to={`/edit/${id}`}>
      {description}
    </Link>
    <p className="amount">${amount}</p>
    <p className="createdAt">{moment(createdAt).format("DD/MM/YYYY")}</p>
  </ItemContainer>
);

export default ExpenseItem;
