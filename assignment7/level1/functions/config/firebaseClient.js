const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyAUD8XWkN11F9IPUkio5HbIrd34MGGBk1g',
  authDomain: 'wesopt29-79f63.firebaseapp.com',
  projectId: 'wesopt29-79f63',
  storageBucket: 'wesopt29-79f63.appspot.com',
  messagingSenderId: '283328423476',
  appId: '1:283328423476:web:ccb6d2c884764828e0cc61',
  measurementId: 'G-R3TXCVXFCG',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
