//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB_zfMLEAlVnAuMAfxR7QjsTqpjKnLzG_Q",
      authDomain: "test-project-7e1aa.firebaseapp.com",
      databaseURL: "https://test-project-7e1aa-default-rtdb.firebaseio.com",
      projectId: "test-project-7e1aa",
      storageBucket: "test-project-7e1aa.appspot.com",
      messagingSenderId: "55858321193",
      appId: "1:55858321193:web:62ab190006563cd0724938"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);  
    
/********************************************************************/

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            likes : 0
      });
      document.getElementById("msg").innerHTML = "";
}
