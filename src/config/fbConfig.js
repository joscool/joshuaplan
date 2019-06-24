import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-8Im4Ob_cfkP1CoR9PJoUm3DchUb497s",
    authDomain: "coolsoft-joshuaplan.firebaseapp.com",
    databaseURL: "https://coolsoft-joshuaplan.firebaseio.com",
    projectId: "coolsoft-joshuaplan",
    storageBucket: "",
    messagingSenderId: "181863204492",
    appId: "1:181863204492:web:d7de7b59fb96ac35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;