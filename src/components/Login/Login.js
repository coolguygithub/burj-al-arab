import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

const Login = () => {
    firebase.initializeApp(firebaseConfig);
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var {displayName, email} = result.user;
        const signedInUser = {name: displayName, email: email}
        console.log(signedInUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        
      });
  };

  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
};

export default Login;
