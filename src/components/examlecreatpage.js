import React from "react";
import Expensesfrom from "./expensesFrom";
import { addexpense } from "../action/expenses";
import { connect } from "react-redux";

export class Examlecreatpage extends React.Component {
  onSubmited = expense => {
    this.props.addexpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <Expensesfrom onSubmited={this.onSubmited} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addexpense: expense => dispatch(addexpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(Examlecreatpage);
