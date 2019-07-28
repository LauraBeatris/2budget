import React from "react";
import { ItemContainer } from "./styles";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';

export const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <ItemContainer>
    <Link className="description" to={`/edit/${id}`}>
      {description}
    </Link>
    <p className="amount">{numeral(amount / 100).format('$0,0.00')}</p>
    <p className="createdAt">{moment(createdAt).format("MMMM, Do, YYYY ")}</p>
  </ItemContainer>
);

export default ExpenseItem;
