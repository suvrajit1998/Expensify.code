import React from "react";
import { connect } from "react-redux";
import { settextfilter, shortByamount, shortBydate } from "../action/filters";

const expenselistfilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(settextfilter(e.target.value));
      }}
    />
    <select
      value={props.filters.shortBy}
      onChange={e => {
        if (e.target.value === "date") {
          props.dispatch(shortBydate());
        } else if (e.target.value === "amount") {
          props.dispatch(shortByamount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const matchfilters = state => {
  return {
    filters: state.filters
  };
};

export default connect(matchfilters)(expenselistfilters);
