import React from "react";
import { connect } from "react-redux";
import Expenseform from "./expensesFrom";
import { editexpense, removeid } from "../action/expenses";

export class Editexpenspage extends React.Component {
  // expense = this.props.expense;
  onSubmited = expense => {
    this.props.editexpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  removeid = () => {
    this.props.removeid(this.props.expense.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Expenseform
          expense={this.props.expense}
          onSubmited={this.onSubmited}
        />
        <button onClick={this.removeid}>Remove</button>
      </div>
    );
  }
}

const tomatchprops = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editexpense: (id, expense) => dispatch(editexpense(id, { expense })),
    removeid: id => dispatch(removeid(id))
  };
};

export default connect(tomatchprops, mapDispatchToProps)(Editexpenspage);
