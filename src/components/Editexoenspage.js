import React from "react";
import { connect } from "react-redux";
import Expenseform from "./expensesFrom";
import { editexpense, removeid } from "../action/expenses";

const Editexpenspage = props => {
  console.log(props);
  return (
    <div>
      <Expenseform
        expense={props.expense}
        onSubmited={expense => {
          props.dispatch(editexpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeid({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const tomatchprops = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(tomatchprops)(Editexpenspage);
