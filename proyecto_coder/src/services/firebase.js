import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBp7ZOcabDdNGL8MJY12xIrIfBWgCjJLsM",
    authDomain: "ecommerce-mauricio.firebaseapp.com",
    databaseURL: "https://ecommerce-mauricio-default-rtdb.firebaseio.com",
    projectId: "ecommerce-mauricio",
    storageBucket: "ecommerce-mauricio.appspot.com",
    messagingSenderId: "304182622098",
    appId: "1:304182622098:web:4e0311787c0dc7276e334b"
};

const app = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(app);  // Para Firestore
export { dbFirestore }