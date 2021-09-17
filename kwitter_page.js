//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC1ElHYTE4VBls9sEBm7YtGdg2pLtPs5OY",
      authDomain: "kwitter-c36f0.firebaseapp.com",
      databaseURL: "https://kwitter-c36f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-c36f0",
      storageBucket: "kwitter-c36f0.appspot.com",
      messagingSenderId: "1064987014967",
      appId: "1:1064987014967:web:bfc1c513a6d21492160cb2",
      measurementId: "G-GJ8Y0YD3B2"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}