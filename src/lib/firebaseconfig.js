// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCMrIMvLUxieGv1zw4qPvl9137aVBorSRk",
    authDomain: "insta-scrim.firebaseapp.com",
    databaseURL: "https://insta-scrim-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "insta-scrim",
    storageBucket: "insta-scrim.appspot.com",
    messagingSenderId: "155074622160",
    appId: "1:155074622160:web:3ec8eb45166307ad50a4d5",
    measurementId: "G-6ZD8BVFK4W"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue }



