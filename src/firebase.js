// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoo_GOtinx3fbfHsE8WiSy1WAmOJ47QhY",
  authDomain: "doonungonline-gm.firebaseapp.com",
  projectId: "doonungonline-gm",
  storageBucket: "doonungonline-gm.appspot.com",
  messagingSenderId: "925511902253",
  appId: "1:925511902253:web:1c96bf1a8db2caf4fac4a4",
  measurementId: "G-2G8P9SMSM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from "firebase/storage";

const storage = getStorage(app);

export { storage }