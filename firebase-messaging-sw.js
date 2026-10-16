importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBsk0TRtP4S9VvghZDKhRyYcMf796iO5aw",
  authDomain: "lovemood-5cff0.firebaseapp.com",
  databaseURL: "https://lovemood-5cff0-default-rtdb.firebaseio.com",
  projectId: "lovemood-5cff0",
  storageBucket: "lovemood-5cff0.firebasestorage.app",
  messagingSenderId: "756633362983",
  appId: "1:756633362983:web:0b9d6994d05d9877faa402"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification ? payload.notification.title : "❤️ LoveMood";
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : "Nouvelle mise à jour !",
    icon: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});