import firebase from 'firebase/app';


const config = {
    apiKey: "AIzaSyBxiIepV_8nY4hq4slxiEAQ1TWJ56vSnYc",
    authDomain: "upwardmovementrealty.firebaseapp.com",
    databaseURL: "https://upwardmovementrealty.firebaseio.com",
    projectId: "upwardmovementrealty",
    storageBucket: "upwardmovementrealty.appspot.com",
    messagingSenderId: "728886634930",
    appId: "1:728886634930:web:1eecbbe5f67a8540569cab",
    measurementId: "G-FGJCVB45F5"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

