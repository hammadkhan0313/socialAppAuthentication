import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js';

const logout = document.querySelector("#logout")

logout.addEventListener("click", () => {

    signOut(auth).then(() => {
        console.log("log out successfully");
        window.location = "register.html"
    }).catch((error) => {
        console.log(error);
    });
})