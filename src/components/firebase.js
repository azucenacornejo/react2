// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq2gGiEJcJnDYl33mXJs0gMHDJSPXX9Lc",
  authDomain: "appreact-f8e75.firebaseapp.com",
  projectId: "appreact-f8e75",
  storageBucket: "appreact-f8e75.appspot.com",
  messagingSenderId: "379149326038",
  appId: "1:379149326038:web:bd7cbb0343f2f74295db77"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage (app);





