import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCsFjZMlP-i1xEcSo8vw9z-GSZEXIdwKvU",
  authDomain: "pet-call-15666.firebaseapp.com",
  projectId: "pet-call-15666",
  storageBucket: "pet-call-15666.appspot.com",
  messagingSenderId: "941337369530",
  appId: "1:941337369530:web:6b93854bf57443bc775b83",
  measurementId: "G-0DP1HMN65W",
};
// const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
