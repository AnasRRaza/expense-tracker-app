import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD3mq2pBCFAYQQWze7nhpXMkIdDnNpDyIc",
  authDomain: "expense-tracker10.firebaseapp.com",
  projectId: "expense-tracker10",
  storageBucket: "expense-tracker10.appspot.com",
  messagingSenderId: "597321093019",
  appId: "1:597321093019:web:2ffae51109de4ebe089b3e"
};
const privateKey = "BE_ADMsg8-7OobLWPO7S0cDVPgSR29o1mZvqqefBdvhhQcmXmd23oUy_Ob2oMsPq0goJtyqUW9b6V1RdEzjcQEk";
initializeApp(firebaseConfig);

const messaging = getMessaging();

export function initNoti() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      getToken(messaging, { vapidKey: privateKey, }).then((token) => {
        if (token) {
          console.log(token);
          return token;
        } else {
          console.log("No registration token available. Request permission to generate one.");
        }
      }).catch((err) => {
        console.log({ err });
      })
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
  })
}