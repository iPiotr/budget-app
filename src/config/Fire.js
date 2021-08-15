import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-BgzVPdVBtrAXQOy84iUaSK1gfNP3r_4",
    authDomain: "budget-52c46.firebaseapp.com",
    projectId: "budget-52c46",
    storageBucket: "budget-52c46.appspot.com",
    messagingSenderId: "865992618244",
    appId: "1:865992618244:web:342556028b22484279a051",
    measurementId: "G-0TFBL50PRL"
}

const fire = firebase.initializeApp(config);
export default fire;
