import React from "react";
import { connect } from "react-redux";
import {
  settextfilter,
  shortByamount,
  shortBydate,
  setstartdate,
  setenddate
} from "../action/filters";
import { DateRangePicker } from "react-dates";

class expenselistfilters extends React.Component {
  state = {
    calenderFocus: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setstartdate(startDate));
    this.props.dispatch(setenddate(endDate));
  };

  onFocusChange = calenderFocus => {
    this.setState(() => ({ calenderFocus }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(settextfilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.shortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(shortBydate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(shortByamount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocus}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const matchfilters = state => {
  return {
    filters: state.filters
  };
};

export default connect(matchfilters)(expenselistfilters);
