import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsFjZMlP-i1xEcSo8vw9z-GSZEXIdwKvU",
  authDomain: "pet-call-15666.firebaseapp.com",
  projectId: "pet-call-15666",
  storageBucket: "pet-call-15666.appspot.com",
  messagingSenderId: "941337369530",
  appId: "1:941337369530:web:6b93854bf57443bc775b83",
  measurementId: "G-0DP1HMN65W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
