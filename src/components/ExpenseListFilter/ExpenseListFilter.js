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

export class ExpenseListFilter extends Component {
  state = {
    calendarFocused: null
  };

  // Handle the changes of the dates
  onDatesChange = ({ startDate, endDate }) => {
    // Dispatching the actions
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  // Handle the changes of the focus
  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  onTextChange = event => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = event => {
    event.target.value === "date"
      ? this.props.sortByDate()
      : this.props.sortByAmount();
  };

  render() {
    return (
      <FilterContainer>
        <div className="input-container">
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            placeholder="Filter by Description"
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <div className="date-range">
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
        </div>
      </FilterContainer>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),

  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilter);
