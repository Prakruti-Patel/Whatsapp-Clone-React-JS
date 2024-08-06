import firebase from './Firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBymTIq5_KmRfbN_JrnnT3Mm2oJ1PJEndI",
  authDomain: "whatsapp-6f4b4.firebaseapp.com",
  projectId: "whatsapp-6f4b4",
  storageBucket: "whatsapp-6f4b4.appspot.com",
  messagingSenderId: "695506654531",
  appId: "1:695506654531:web:64b8641e70b52d1dde0bf6"
};

  // connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // database connection
  const db = firebase.firestore();

  export default db;