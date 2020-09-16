import * as firebase from 'firebase';

// Initialize Firebase
  
  var firebaseConfig = {
    apiKey: "AIzaSyCSkdXqonnW3nX4cQoHFZA_AkX8HB_AXdA",
    authDomain: "fir-app-a6c62.firebaseapp.com",
    databaseURL: "https://fir-app-a6c62.firebaseio.com",
    projectId: "fir-app-a6c62",
    storageBucket: "fir-app-a6c62.appspot.com",
    messagingSenderId: "572321417507",
    appId: "1:572321417507:web:1482c8f63bd60315d36496",
    measurementId: "G-23B9D6E3XE"
  };
  firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export{
  firebaseDB
}































  //firebase.analytics();
//firebase.database().ref('students').set({
//   name : 'fatima yaya',
//    age : 28,
//    carer : 'Back-End'
//}).then(() => {
//console.log('okey');
//});
//:::::::::::::::::::::::::::::::

//firebase.database().ref('products').push({
 // title : 'product n2',
 // price : '500 dh'
//});

//:::::::::::::::::::::::::::
//firebase.database().ref('products').limitToFirst(1).once('value')
//.then((snapshot) => {

//        const products = [];
//         snapshot.forEach((childsnapshot) => {
//                   products.push({
//                        id : childsnapshot.key,
//                         ...childsnapshot.val()
//                         })
//                  })
 //            console.log(products);

//          });
//::::::::::::::::::::::::

//firebase.database().ref().once('value').then((snapshot)=> {
//console.log(snapshot.val());
//});
