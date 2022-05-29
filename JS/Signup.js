// Importing all the functions i need from the SDKs i need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {
  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//-----------------------------------------------------FIREBASE INCLUDED ----------------------------------------------------------//




// FUNCTION FOR SIGNING IN


let sign_up =()=>{
  let email=document.getElementById("Email");
  let password=document.getElementById("password");
  

const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  window.location.href = "Signin.html"

  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
});

}







const button1=document.getElementById("btn1")
button1.addEventListener("click",sign_up);

