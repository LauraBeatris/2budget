const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update // overriden the expense items with the action updates items
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      // Replacing the existing ones
      return action.expenses;

    default:
      return state;
  }
};

export default expensesReducer;
