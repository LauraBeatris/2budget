import React from 'react'
import moment from 'moment'
import { getVisibleExpenses } from '../../selectors/expenses';
import {getExpenseTotal} from "../../selectors/expenses";

import { connect } from 'react-redux'
import numeral from 'numeral'

export const ExpensesSummary = ({expenses}) => (
    <div className="summary">
    <p className="moment">{moment().format("MMMM YYYY")}</p>
    <p className="quantity">{expenses.length > 1 ? expenses.length + ' Items' : expenses.length + ' Item'}</p>
   
    <h1 className="total-amount">{numeral(getExpenseTotal(expenses) / 100).format('$0,0.00')}</h1>
    <h2>Total Amount</h2>
  </div>
)

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})
export default connect(mapStateToProps)(ExpensesSummary)