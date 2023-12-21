import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOyBPMNK6xXYaiSzMSoayGV0g8MFKArQs",
    authDomain: "socialapp-16b63.firebaseapp.com",
    projectId: "socialapp-16b63",
    storageBucket: "socialapp-16b63.appspot.com",
    messagingSenderId: "405662708626",
    appId: "1:405662708626:web:169c9982d3cdd5428d874b",
    measurementId: "G-VHFVBY06S7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
