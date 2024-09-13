// Import the Firebase functions you need from the SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AlzaSyAx-IM5C1Qx4T5tdeMP4n0TlO-iZLTxX7Q",
    authDomain: "kristiancybersec.firebaseapp.com",
    projectId: "kristiancybersec",
    storageBucket: "kristiancybersec.appspot.com",
    messagingSenderId: "635905897972",
    appId: "1:635905897972:web:67a7d9a3f4c103efca75a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect if user is not logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
});
