// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRu0lTgZpHsZ-XAlHthYwBoP6dtdNaqNg",
  authDomain: "phr23-e88c5.firebaseapp.com",
  projectId: "phr23-e88c5",
  storageBucket: "phr23-e88c5.appspot.com",
  messagingSenderId: "652662710809",
  appId: "1:652662710809:web:eda4a6def4c22c5b8cc088",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
