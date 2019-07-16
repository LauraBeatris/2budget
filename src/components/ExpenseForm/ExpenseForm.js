import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    rent: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false
  };

  // Updating the description state with the input value
  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  // Updating the note state with the text area value
  onTextAreaChange = event => {
    const rent = event.target.value;
    this.setState({ rent });
  };

  // Updating the amount state with the text area value
  onAmountChange = event => {
    const amount = event.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  // Handling the data changing and setting it to state
  onDateChange = createdAt => {
    this.setState(({ createdAt }));
  };

  // Handling the focus changing and setting it to state
  onFocusChange = ({ focused }) => {
    this.setState(({ calendarFocused: focused }));
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input
          type="number"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.rent}
          onChange={this.onTextAreaChange}
        />
        <button>Add Expense</button>
      </form>
    );
  }
}
