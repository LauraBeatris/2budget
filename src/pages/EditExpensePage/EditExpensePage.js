import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import Modal from "react-modal";

import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { startRemoveExpenses, startEditExpenses } from "../../actions/expenses";
import { ButtonRemove, EditContainer, ModalContainer } from "./styles";

export class EditExpensePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push("/dashboard");
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };

    return (
      <div>
        <Helmet>
          <title> 2Budget | Edit Expense </title>
        </Helmet>
        <EditContainer>
          <ExpenseForm
            type="Edit"
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <ButtonRemove
            id="remove-button"
            onClick={() => this.setState({ modalIsOpen: true })}
          >
            Remove
          </ButtonRemove>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalContainer>
              <p> Are you sure that you want to delete this expense? </p>
              <div>
                <button onClick={this.onClick}> Yes </button>
                <button onClick={this.closeModal}> No </button>
              </div>
            </ModalContainer>
          </Modal>
        </EditContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // Finding the expense with the match id
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(startEditExpenses(id, expense)),
  removeExpense: expense => dispatch(startRemoveExpenses(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
