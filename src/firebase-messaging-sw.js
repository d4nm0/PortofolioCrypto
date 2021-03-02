// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const config =  {
  apiKey: "AIzaSyA_w5WyVEUI1oVKJ6ppMs0jpsotLTozIXM",
  authDomain: "portofoliocrypto.firebaseapp.com",
  databaseURL: "https://portofoliocrypto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portofoliocrypto",
  storageBucket: "portofoliocrypto.appspot.com",
  messagingSenderId: "732119440508",
  appId: "1:732119440508:web:ac2960cfde5cefb5b33df9",
  measurementId: "G-KX5XY1JGC1",
  vapidKey: "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4"
};
firebase.initializeApp(config);

  const messaging = firebase.messaging();

