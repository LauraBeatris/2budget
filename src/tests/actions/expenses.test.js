import {
  addExpenseRequest,
  removeExpense,
  addExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpenses,
  startEditExpenses
} from "../../actions/expenses";
import moment from "moment";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

// Creating the configuration of the mock store for the tests cases create the
// same mock store everytime
// Passing an array with the middlewares that we'll gonna use
const createMockStore = configureMockStore([thunk]);

const uid = "mytestuid";
const defaultAuthState = { auth: { uid } };

// Before each test case
beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt
    };
  });
  expensesData[1].createdAt = moment().valueOf();
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done())
    .catch(err => console.log(err));
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "abc123" });

  // toBe (===) and objects and arrays are not equal
  // {} === {} -> false
  // [] === [] -> false
  // So we have to use toEqual, that will se every item of a array or a object
  // When we're using objects or arrays we wanna use toEqual
  // When we're using booleans, numbers or strings, we wanna use toBe

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", { description: 123 });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    update: {
      description: 123
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Mouse",
    amount: "3000",
    note: "This one is better",
    createdAt: 1000
  };

  // Force Jest to wait -> done

  // We'll just make our associations when all the things will be ready
  // Promisse chaining
  store
    .dispatch(addExpenseRequest(expenseData))
    .then(() => {
      // This will return an array with all of the actions
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  // Dispatching the action and getting the resolve
  store
    .dispatch(addExpenseRequest())
    .then(() => {
      const actions = store.getActions();
      //console.log(actions[0]);
      // Verifying if the action is right
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      // After this, returning the subscription of the database, to see the data
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should set up test expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    // Getting the actions that were dispatched
    const actions = store.getActions();

    // It will get the expenses from the test database and then, send an
    // action with that data that set the state

    expenses[0].createdAt = moment().valueOf();

    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("should remove expenses from database", done => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startRemoveExpenses({ id: 1 })).then(() => {
    const actions = store.getActions();

    // Verifying the action object
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: 1
    });

    // Veryfing if the action was deleted from database
    database
      .ref(`users/${uid}/expenses/1`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toBe(null);
        done();
      })
      .catch(err => console.log(err));
  });
});

test("should edit expense from firebase", done => {
  const id = expenses[1].id;
  const store = createMockStore(defaultAuthState);

  const update = {
    amount: 1955
  };

  // Dispatching the action to the store
  store.dispatch(startEditExpenses(id, update)).then(() => {
    const actions = store.getActions();

    // Checking the action
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      update
    });

    // Veryfing if the database is up to date
    database
      .ref(`users/${uid}/expenses/${id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val().amount).toBe(update.amount);

        done();
      })
      .catch(err => console.log(err));
  });
});
