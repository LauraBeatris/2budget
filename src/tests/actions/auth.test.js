import { login, logout } from "../../actions/auth";

test("should setup user id at login", () => {
  const uid = 4;
  const action = login(uid);

  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should erase user id at logout", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
