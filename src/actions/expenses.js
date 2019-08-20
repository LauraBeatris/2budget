import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => {
  return {
    type: "ADD_EXPENSE",
    expense
  };
};

export const addExpenseRequest = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt
    };
    // After sending this to database -> dispatch the action to the store
    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

//SET_EXPENSE
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    const expenses = [];

    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};

export const startRemoveExpenses = ({ id } = {}) => {
  // This asyncronous function is responsable for doing a connection with
  // firebase and dispatching an action
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(snapshot => {
        //console.log("expense removed");
        dispatch(removeExpense({ id }));
      });
  };
};

export const startEditExpenses = (id, update) => {
  return dispatch => {
    // Getting the reference of the expense from database and setting the new value
    return database
      .ref(`expenses/${id}`)
      .update(update)
      .then(snapshot => {
        //expense edit

        //Dispatching the action to store
        dispatch(editExpense(id, update));
      })
      .catch(err => console.log(err));
  };
};
