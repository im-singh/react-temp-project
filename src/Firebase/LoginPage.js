import React, { useEffect }from 'react';
import firebase from "firebase/app";


function LoginPage() {
     useEffect(() => {
         firebase.auth().signInWithEmailAndPassword("mohinder.zestgeek@gmail.com", "password")
          .then((userCredential) => {
              // Signed in
              let user = userCredential.user;
              console.log("🚀 ~ file: LoginPage.js ~ line 11 ~ .then ~ user", user)
              // ...
          })
          .catch((error) => {
              console.log("🚀 ~ file: LoginPage.js ~ line 15 ~ useEffect ~ error", error)
              let errorCode = error.code;
              let errorMessage = error.message;
          });
     })
  return (
    <>
    <p>Login</p>
    </>
  );
}
export default LoginPage;