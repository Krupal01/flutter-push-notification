importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: 'AIzaSyDWCXCFZtyxd-4Vpdhst62hBn24pY8Z2EQ',
  appId: '1:409846969937:web:7e27b31c99aef8dc92aa70',
  messagingSenderId: '409846969937',
  projectId: 'push-notification-ee0f1',
  authDomain: 'push-notification-ee0f1.firebaseapp.com',
  storageBucket: 'push-notification-ee0f1.appspot.com',
  measurementId: 'G-RMEMC0N7RV',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});