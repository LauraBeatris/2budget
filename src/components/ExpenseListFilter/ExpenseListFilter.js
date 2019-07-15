import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

// onChange -> everytime that the input changes the function fire
// we have to change the redux store, using dispatch to update the store so
// our key instructions results in the change of the input

// Connected components have access directly to dispatch

// Controlled inputs

const ExpenseListFilter = props => (
  <div className="d-flex-column">
    <input
      type="text"
      value={props.filters.text}
      onChange={event => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={event => {
        event.target.value === "date"
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByAmount());
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
