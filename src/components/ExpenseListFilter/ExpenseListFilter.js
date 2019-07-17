import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import { FilterContainer } from "./styles";

class ExpenseListFilter extends Component {
  state = {
    calendarFocused: null
  };

  // Handle the changes of the dates
  onDatesChange = ({ startDate, endDate }) => {
    // Dispatching the actions
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  // Handle the changes of the focus
  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  render() {
    return (
      <FilterContainer>
        <div className="input-container">
          <input
            type="text"
            value={this.props.filters.text}
            onChange={event => {
              this.props.dispatch(setTextFilter(event.target.value));
            }}
            placeholder="Filter by Description"
          />
          <select
            value={this.props.filters.sortBy}
            onChange={event => {
              event.target.value === "date"
                ? this.props.dispatch(sortByDate())
                : this.props.dispatch(sortByAmount());
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </FilterContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
