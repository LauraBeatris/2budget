import React, { Component } from "react";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    rent: "",
    amount: ""
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
