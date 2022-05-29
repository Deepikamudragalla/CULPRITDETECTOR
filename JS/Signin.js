// Importing all the functions i need from the SDKs i need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

import {
  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

//-------------------------------------------------------------------------------------------------------------------//

// My web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAnf0LpCIJHcru6VoSyLtrCHZYQHnMuyA8",
  authDomain: "criminaldetection-83bcc.firebaseapp.com",
  databaseURL: "https://criminaldetection-83bcc-default-rtdb.firebaseio.com",
  projectId: "criminaldetection-83bcc",
  storageBucket: "criminaldetection-83bcc.appspot.com",
  messagingSenderId: "999764876999",
  appId: "1:999764876999:web:f5124be90b3801f18028e2",
  measurementId: "G-DRSNS3VQGJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//-----------------------------------------------------FIREBASE INCLUDED ----------------------------------------------------------//




// FUNCTION FOR SIGNING IN







let sign_in =()=>{
let email=document.getElementById("Email");
let password=document.getElementById("password");

const auth1 = getAuth();
signInWithEmailAndPassword(auth1, email.value, password.value)
.then((userCredential) => {
  const user = userCredential.user;
  console.log("signedin")
  window.location.href = "HOME.html"
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
});
}

const button2=document.getElementById("btn2")
button2.addEventListener("click",sign_in);
