import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const now = moment();

export default class ExpensesFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decription: props.expense ? props.expense.decription : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocus: false,
      error: ""
    };
  }

  onDecription = e => {
    const decription = e.target.value;
    this.setState(() => ({ decription }));
  };

  onNotechang = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocus: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.decription || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide Description Amount"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmited({
        decription: this.state.decription,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.decription}
            onChange={this.onDecription}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your Expense (Optional)"
            value={this.state.note}
            onChange={this.onNotechang}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
