import {getExpenseTotal} from "../../selectors/expenses";
import expenses from "../fixtures/expenses";


test('should return 0 if no expenses', () => {
    const total = getExpenseTotal([])
  
    expect(total).toBe(0)
  })
  
  test('should corrently add up a single expenses', () => {
    const total = getExpenseTotal([expenses[0]])
  
    expect(total).toBe(195)
  })
  
  test('should currently add up multiple expenses', () => {
    const total = getExpenseTotal(expenses)
  
    expect(total).toBe(34296)
  })