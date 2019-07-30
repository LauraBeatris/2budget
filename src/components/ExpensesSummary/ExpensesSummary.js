import React from 'react'
import moment from 'moment'
import { getVisibleExpenses } from '../../selectors/expenses';
import {getExpenseTotal} from "../../selectors/expenses";

import { connect } from 'react-redux'
import numeral from 'numeral'

export const ExpensesSummary = ({expensesQuantity, expensesTotal}) => (
    <div className="summary">
    <p className="moment">{moment().format("MMMM YYYY")}</p>
    <p className="quantity">{expensesQuantity > 1 ? expensesQuantity + ' Items' : expensesQuantity + ' Item'}</p>
   
    <h1 className="total-amount">{numeral(expensesTotal / 100).format('$0,0.00')}</h1>
    <h2>Total Amount</h2>
  </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    return {
      expensesQuantity: visibleExpenses.length,
      expensesTotal: getExpenseTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary)