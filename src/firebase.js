
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEfRSLyVYCSUyv-rmrKCXT1i4QkNV7uUU",
  authDomain: "clone-95782.firebaseapp.com",
  projectId: "clone-95782",
  storageBucket: "clone-95782.appspot.com",
  messagingSenderId: "731835982678",
  appId: "1:731835982678:web:e8126b6a630bb8f1966cf7",
  measurementId: "G-19PWVWBD8R"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = getAuth(firebaseApp);
const auth  = getAuth(firebaseApp);

export  { auth };