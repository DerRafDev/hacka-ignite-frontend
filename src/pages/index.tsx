import {
  Container,
} from '../../styles/styles'

import { useState, useEffect } from 'react';
import fire from '../services/fire';
import Login from '../components/Login/index';
import firebase from 'firebase';

export default function Home() {
  const [user, setUser] = useState({} as firebase.User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [fireAdmin, setFireAdmin ] = useState({} as firebase.app.App);

  useEffect(() => {
    (async() => {
      const admin = await FirebaseAdmin()
      setFireAdmin(admin)
      authListener();
    })
  }, [])

  //this is to clear the Inputs
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPassword('');
  }

  const FirebaseAdmin = async () => {
    return await fire()
  }

  //this is to login in firebase
  const handleLogin = async () => {
    clearErrors();
      fireAdmin
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  //this is to create an account
  const handleSignup = () => {
    clearErrors();
    fireAdmin
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    fireAdmin.auth().signOut();
  }

  //this is to check user
  const authListener = () => {
    fireAdmin.auth().onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser({} as firebase.User)
      }
    });
  };

  return (
    <Container>
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    </Container>
  )
}
