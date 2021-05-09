import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider); // return promise
  }

  logout() {
    return firebaseAuth.signOut(); // return promise
  }

  onAuthChange(onUserchanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserchanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
