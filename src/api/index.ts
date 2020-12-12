import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDtW-sa7H0UTWKDBBftHCGAPS0nuJyci6I',
  authDomain: 'nss-visualizer.firebaseapp.com',
  databaseURL: 'https://nss-visualizer.firebaseio.com',
  projectId: 'nss-visualizer',
  storageBucket: 'nss-visualizer.appspot.com',
  messagingSenderId: '448214826520',
  appId: '1:448214826520:web:7c08c0302f4aed1a874d6d',
  measurementId: 'G-8E26HSN5LG'
};

export function initializeApi() {
  firebase.initializeApp(firebaseConfig);
}
