import moment from "moment";

// Get visible expenses
export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return b.createdAt < a.createdAt ? -1 : 1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      } else {
        return null;
      }
    });
};

export const getExpenseTotal = expenses => {
  if (expenses.length === 0) {
    return 0;
  } else if (expenses.length > 1) {
    const amounts = expenses.map(expense => expense.amount);
    return amounts.reduce((sum, value) => sum + value, 1);
  } else {
    return expenses[0].amount;
  }
};
