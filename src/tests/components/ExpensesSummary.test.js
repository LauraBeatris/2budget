import React from 'react';
import { shallow } from 'enzyme'
import { getVisibleExpenses } from '../../selectors/expenses';
import {getExpenseTotal} from "../../selectors/expenses"; 
import {ExpensesSummary} from "../../components/ExpensesSummary/ExpensesSummary";
import expenses from "../fixtures/expenses"


test('should correctly render ExpensesSummary with 1 expense', () => {
    const expensesTotal = getExpenseTotal([expenses[0]])
    const wrapper = shallow(<ExpensesSummary expenses={{expensesTotal, expensesQuantity: 1}}/>)
    expect(wrapper).toMatchSnapshot()

    
})

test('should correctly render ExpensesSummary with more than 1 expense', () => {
    const expensesTotal = getExpenseTotal([expenses])
    const wrapper = shallow(<ExpensesSummary expenses={{expensesTotal, expensesQuantity: 2}}/>)

    expect(wrapper).toMatchSnapshot()  
})
