var firebaseConfig = {
      apiKey: "AIzaSyAWawem0-zDz4DgzUzp4JE8KmrFi8VUeqA",
      authDomain: "kwitter-4db69.firebaseapp.com",
      databaseURL: "https://kwitter-4db69.firebaseio.com",
      projectId: "kwitter-4db69",
      storageBucket: "kwitter-4db69.appspot.com",
      messagingSenderId: "917689407981",
      appId: "1:917689407981:web:4718d65f3bc434b51aafe4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("user");
document.getElementById("welcome_user").innerHTML = "Welcome "+user_name+" !";

function addroom(){
  var room_name=document.getElementById("room_name").value;
  localStorage.setItem("room name" , room_name);
  firebase.database().ref("/").child(room_name).update({
        room : "added room name"})
        window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      var row ="<div class='room_name' id="+Room_names+" onclick='gotoroomname(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function gotoroomname(room){
      console.log(room_name);
      localStorage.setItem("room name" , room);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room name")
      localStorage.removeItem("user")
      window.location="index.html"
}
