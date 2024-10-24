import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE3fOPV8IBRIRWwHKMgslUKuEXHT4hbMw",
  authDomain: "vue-shopping-43269.firebaseapp.com",
  projectId: "vue-shopping-43269",
  storageBucket: "vue-shopping-43269.appspot.com",
  messagingSenderId: "54070735190",
  appId: "1:54070735190:web:7235620b1c853996e2e6f7"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
