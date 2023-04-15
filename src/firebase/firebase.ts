import firebase from 'firebase/compat/app';
// import 'firebase/firestore';

const FirebaseCredentials = {
  apiKey: 'AIzaSyCjrqW_sJiWSC03tIkTawoUYMBGnu6MN4k',
  authDomain: 'offer-zone-final.firebaseapp.com',
  databaseURL: 'https://offer-zone-final.firebaseio.com',
  projectId: 'offer-zone-final',
  storageBucket: 'offer-zone-final.appspot.com',
  messagingSenderId: '1070154786255',
  appId: '1:1070154786255:web:6994c96e748b7639fb5eba',
  measurementId: 'G-GZNE72X77G',
};
// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCredentials);
}

export default firebase;
