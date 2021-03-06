import React from "react";
import { Link } from "react-router-dom";

export const ExpensesItem = ({
  decription,
  amount,
  createdAt,
  id,
  dispatch
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{decription}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpensesItem;
