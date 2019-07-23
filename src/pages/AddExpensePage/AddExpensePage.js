import React, {Component} from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";
import { AddContainer } from "./styles";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.onSubmit(expense)
    // Redirecting to dashboard page
    this.props.history.push("/dashboard");
  }
  render(){
    return (
       <div>
        <Header />
        <AddContainer>
          <h1 className="add-title">Add a expense</h1>
          <ExpenseForm
            // Dispatching the action ADD_EXPENSE to the redux store
            onSubmit={this.onSubmit}
          />
        </AddContainer>
      </div>
    )
   
  }
}

const mapDispatchToProps = (dispatch) => (
   {
    onSubmit: (expense) => dispatch(addExpense(expense))
  }
)

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
