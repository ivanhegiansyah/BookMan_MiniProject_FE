// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsK2pK3UjBP6-OV4JMi_Yb7ILzgqaGpM0",
  authDomain: "bookman-c9833.firebaseapp.com",
  projectId: "bookman-c9833",
  storageBucket: "bookman-c9833.appspot.com",
  messagingSenderId: "718006030904",
  appId: "1:718006030904:web:9893ae19ba793ff07f4ccd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
