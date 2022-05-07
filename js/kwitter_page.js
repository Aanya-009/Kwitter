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
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         likes = message_data['likes'];
         message = message_data['message'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='../img/tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button_with_tag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='update_likes(this.id)'>";
         button_span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: "+likes+"</span></button><hr>";
         row = name_with_tag+ message_with_tag+like_button_with_tag+ button_span_tag;
         document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "../index.html";
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

function update_likes(message_id){
      console.log("Clicked on a like button"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            likes : updated_likes
      });
}