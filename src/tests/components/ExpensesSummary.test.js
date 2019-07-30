import React from 'react';
import { shallow } from 'enzyme'
import {ExpensesSummary} from "../../components/ExpensesSummary/ExpensesSummary";
import expenses from "../fixtures/expenses"


test('viewing to 1 expense totalling $1.95', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>)

    expect(wrapper.find('.quantity').text()).toBe('1 Item')
    expect(wrapper.find('.total-amount').text()).toBe('$1.95')
})

test('viewing to 2 expenses totalling $32.95', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]}/>)

    expect(wrapper.find('.quantity').text()).toBe('2 Items')
    expect(wrapper.find('.total-amount').text()).toBe('$32.96')
})
