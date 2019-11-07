import React from "react";
import Expensesfrom from "./expensesFrom";
import { addexpense } from "../action/expenses";
import { connect } from "react-redux";

const examlecreatpage = props => (
  <div>
    <h1>Add Expense</h1>
    <Expensesfrom
      onSubmited={expense => {
        props.dispatch(addexpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(examlecreatpage);
