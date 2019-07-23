import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { FormContainer } from "./styles";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  // Updating the description state with the input value
  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  // Updating the note state with the text area value
  onTextAreaChange = event => {
    const note = event.target.value;
    this.setState({ note });
  };

  // Updating the amount state with the text area value
  onAmountChange = event => {
    const amount = event.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  // Handling the data changing and setting it to state
  onDateChange = createdAt => {
    // Prevent the user to clear the value
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  // Handling the focus changing and setting it to state
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = event => {
    event.preventDefault();

    // Checking if there's a description and a amount
    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount'
      const error = "Please provide description and amount";
      this.setState({ error });
    } else {
      // Clear the error
      this.setState({ error: "" });
      // Calling the onSubmit of from props to pass a expense
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.onSubmit}>
          {" "}
          <div>
            {this.state.error && (
              <p className="msg-error">{this.state.error}</p>
            )}
          </div>
          <div className="description-amount">
            <input
              type="text"
              placeholder="Type a description"
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
          </div>
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.rent}
            onChange={this.onTextAreaChange}
            className="note"
            rows="2"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <button className="btn-submit">{this.props.type} Expense</button>
        </form>
      </FormContainer>
    );
  }
}
