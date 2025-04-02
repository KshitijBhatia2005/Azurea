import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAK4JpEyYgYjI5lPwTACfqa8SBoMFkhdZM",
  authDomain: "azurea-43f1c.firebaseapp.com",
  projectId: "azurea-43f1c",
  storageBucket: "azurea-43f1c.firebasestorage.app",
  messagingSenderId: "335847162911",
  appId: "1:335847162911:web:c9da182a1d773a59d7012a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
