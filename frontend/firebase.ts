// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3-Ug3OALn_wRPLYmkMFuEe3m54YrPzCE',
  authDomain: 'looop-dapp.firebaseapp.com',
  projectId: 'looop-dapp',
  storageBucket: 'looop-dapp.appspot.com',
  messagingSenderId: '160062787419',
  appId: '1:160062787419:web:4b664f2db1bbbf3c38147e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
