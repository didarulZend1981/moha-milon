// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7xxC5EM0udZyR_-Ixh_LW4OHD7BwrPjs",
  authDomain: "moha-milon-74c27.firebaseapp.com",
  projectId: "moha-milon-74c27",
  storageBucket: "moha-milon-74c27.appspot.com",
  messagingSenderId: "868467958007",
  appId: "1:868467958007:web:aa3f563b233912e3b5b3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;