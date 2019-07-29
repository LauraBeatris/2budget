import moment from "moment";

// Get visible expenses
export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
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
      }
    });
};

export const getExpenseTotal = (expenses) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  if (expenses && expenses.length > 0){
    const amounts = expenses.map((expense) => expense.amount)
    const total = amounts.reduce(reducer, 0)
  
    return total
  } else if (expenses) {
    return expenses
  }

  return 0
  
}


