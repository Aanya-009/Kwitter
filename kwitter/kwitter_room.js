 
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
    });
  }
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_room.html"
}

function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
