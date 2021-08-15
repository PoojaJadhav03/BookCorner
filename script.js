// var firebaseConfig = {
//     apiKey: "AIzaSyCyl3jA8tUBqXcl57houv9eiGCdCV3EY9M",
//     authDomain: "bookcorner-d2de2.firebaseapp.com",
//     projectId: "bookcorner-d2de2",
//     storageBucket: "bookcorner-d2de2.appspot.com",
//     messagingSenderId: "1027539794423",
//     appId: "1:1027539794423:web:2fb39899e12beb2b5dd6f2",
//     measurementId: "G-EYEK9C3Y73"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const auth = firebase.auth();

// auth.onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";

//     var user = firebase.auth().currentUser;

//     if(user != null){

// window.location.href = "books.html";
//     }

//   } else {
   
//     // window.location.href = "index.html";


//   }
// });
// function login() {

//     var email = document.getElementById("inputEmail").value;
//     var password = document.getElementById("inputPassword").value;
    
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
  
//       window.alert("Error : " + errorMessage);
  
//       // ...
//     });
  


//  }

// function register() {

//    var semail = document.getElementById("sinputEmail").value;
//    var spassword = document.getElementById("sinputPassword").value;

//     firebase.auth().createUserWithEmailAndPassword(semail, spassword)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     if(user)
//     {
//       window.location.href = 'http://localhost:5500/';
//     }
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
// alert("er");
//   });

// }

// // function signout(){
// //     auth.signOut().then(() => {
// // window.alert("Sign out")    ;
// //   }).catch((error) => {
// //     window.alert("Sign out errio")   
// //       });
// // }


