
var firebaseConfig = {
    apiKey: "AIzaSyCcLN3ek_MaKOfkhCd1gGdWLQcjcEb8ueY",
    authDomain: "kwitter-1353d.firebaseapp.com",
    databaseURL: "https://kwitter-1353d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1353d",
    storageBucket: "kwitter-1353d.appspot.com",
    messagingSenderId: "332827048997",
    appId: "1:332827048997:web:d2c178d36d11b0eab253cc",
    measurementId: "G-7BWGBM278L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        practice : "activity"
    });
}