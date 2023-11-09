import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsFjZMlP-i1xEcSo8vw9z-GSZEXIdwKvU",
  authDomain: "pet-call-15666.firebaseapp.com",
  projectId: "pet-call-15666",
  storageBucket: "pet-call-15666.appspot.com",
  messagingSenderId: "941337369530",
  appId: "1:941337369530:web:6b93854bf57443bc775b83",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const realTimeDb = getDatabase(app);
export const storage = getStorage(app);

export default app;
