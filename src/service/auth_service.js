import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider); // return promise
  }

  logout() {
    return firebaseApp.auth().signOut(); // return promise
  }

  onAuthChange(onUserchanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserchanged(user);
    });
  }
}

export default AuthService;
