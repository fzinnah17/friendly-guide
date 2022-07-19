// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  authDomain: "friendly-guide-1feac.firebaseapp.com",
  projectId: "friendly-guide-1feac",
  storageBucket: "friendly-guide-1feac.appspot.com",
  messagingSenderId: "488630407550",
  appId: "1:488630407550:web:208439c2abaec29ae9232f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;