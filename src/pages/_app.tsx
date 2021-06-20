import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase";
import React from "react";
import { GlobalStyle } from "../../styles/global";

const config = {
  apiKey: "AIzaSyDL6pza-H_v7jZJcpET0IIzQtHgmop2oj4",
  authDomain: "alfred-ignite.firebaseapp.com",
  databaseURL: "https://alfred-ignite-default-rtdb.firebaseio.com",
  projectId: "alfred-ignite",
  storageBucket: "alfred-ignite.appspot.com",
  messagingSenderId: "225856459120",
  appId: "1:225856459120:web:47f3265971fa4445cd3fb5",
  measurementId: "G-VCBJYD2DGJ"
};

export default function MyApp({ Component, pageProps }) {

  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Component {...pageProps} />
      <GlobalStyle />
    </FirebaseAuthProvider>
  )
}