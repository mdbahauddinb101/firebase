
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyBu4_f3FcztTEGp4XDQrSW7jg5xi12qJ7Q",
  authDomain: "crurbabu.firebaseapp.com",
  databaseURL: "https://crurbabu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crurbabu",
  storageBucket: "crurbabu.firebasestorage.app",
  messagingSenderId: "123595756290",
  appId: "1:123595756290:web:ea00664b3765c4f18c281b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}
export default app
