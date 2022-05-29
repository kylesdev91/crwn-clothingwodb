import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqfoL5ZXCu0ADrcRbO6iQ1uHfhdYtq6YU',
  authDomain: 'crwn-clothing-db-31932.firebaseapp.com',
  projectId: 'crwn-clothing-db-31932',
  storageBucket: 'crwn-clothing-db-31932.appspot.com',
  messagingSenderId: '996190061764',
  appId: '1:996190061764:web:19031d62cbd9b2c3a9b591',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
