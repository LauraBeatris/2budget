import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLoginGoogle = () => {
  return dispatch => {
    // Signing in with a pop up,
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
