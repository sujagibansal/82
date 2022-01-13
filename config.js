import firebase from 'firebase';
require('@firebase/firestore')
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyByC2t6iI_4_tpOfq4c8wODAYAN-WfEaq8",
  authDomain: "shoppingbasket-14d8f.firebaseapp.com",
  projectId: "shoppingbasket-14d8f",
  storageBucket: "shoppingbasket-14d8f.appspot.com",
  messagingSenderId: "407716348811",
  appId: "1:407716348811:web:2597f3419501c910eea58e"
};

 
   if(!firebase.apps.length) { 
     firebase.initializeApp(firebaseConfig) 
     } 
     
  export default firebase.firestore()
