import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANqzgm1x_YRsM9HKVIiNrmRTKlB5Ikt8I",
    authDomain: "looking-tutors-for-admin.firebaseapp.com",
    databaseURL: "https://looking-tutors-for-admin.firebaseio.com",
    projectId: "looking-tutors-for-admin",
    storageBucket: "looking-tutors-for-admin.appspot.com",
    messagingSenderId: "857409823469",
    appId: "1:857409823469:web:f1bc04f3ff7fdcc00222e4",
    measurementId: "G-SKXQFMST7B"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;