import authReducer from "../../reducers/auth";

test("should set id for login", () => {
  const INITIAL_STATE = {};
  const action = {
    type: "LOGIN",
    uid: 2
  };

  const state = authReducer(INITIAL_STATE, action);
  expect(state).toEqual({ uid: action.uid });
});

test("should clear id for logout", () => {
  const INITIAL_STATE = { uid: "random" };
  const action = {
    type: "LOGOUT"
  };

  const state = authReducer(INITIAL_STATE, action);
  expect(state).toEqual({});
});
