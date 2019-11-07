import React from "react";
import { connect } from "react-redux";
import { removeid } from "../action/expenses";

const ExpensesItem = ({ decription, amount, createdAt, id, dispatch }) => (
  <div>
    <h3>{decription}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeid({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpensesItem);
