// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsMaHLQTj8dtm_ZZce5SDORehyyjAEW14",
  authDomain: "fir-2a022.firebaseapp.com",
  databaseURL: "https://fir-2a022-default-rtdb.firebaseio.com",
  projectId: "fir-2a022",
  storageBucket: "fir-2a022.appspot.com",
  messagingSenderId: "28263156107",
  appId: "1:28263156107:web:46b9c71f6a0e41426e878e",
  database: "https://fir-2a022-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
