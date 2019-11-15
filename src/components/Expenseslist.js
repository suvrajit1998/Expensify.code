import React from "react";
import { connect } from "react-redux";
import ExpenseslistItem from "./expenselistitem";
import Selectexpenses from "../selector/getvisibleexpenses";

export const ExpensesList = props => (
  <div>
    <h1>Expenses List</h1>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map(expens => {
        return <ExpenseslistItem key={expens.id} {...expens} />;
      })
    )}
  </div>
);

const mapstatetoprops = state => {
  return {
    expenses: Selectexpenses(state.expenses, state.filters)
  };
};

export default connect(mapstatetoprops)(ExpensesList);
