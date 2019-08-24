import { firebase, provider } from "../firebase/firebase";

export const startLoginGoogle = () => {
  return dispatch => {
    // Signing in with a pop up,
    return firebase.auth().signInWithPopup(provider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
