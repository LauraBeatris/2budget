import { firebase, provider } from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLoginGoogle = () => {
  return dispatch => {
    // Signing in with a pop up,
    return firebase.auth().signInWithPopup(provider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
