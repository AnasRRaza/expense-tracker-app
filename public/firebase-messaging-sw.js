
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyD3mq2pBCFAYQQWze7nhpXMkIdDnNpDyIc",
  authDomain: "expense-tracker10.firebaseapp.com",
  projectId: "expense-tracker10",
  storageBucket: "expense-tracker10.appspot.com",
  messagingSenderId: "597321093019",
  appId: "1:597321093019:web:2ffae51109de4ebe089b3e"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();