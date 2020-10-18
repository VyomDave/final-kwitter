//YOUR FIREBASE LINKS
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
    var user_name = localStorage.getItem("user")
    var room_name = localStorage.getItem("room name")
    
    function send(){
          msg = document.getElementById("message_input").value;

          firebase.database().ref(room_name).push({
                USER : user_name, 
                MSG : msg,
                LIKE : 0
          })
    }
    


function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) 
      { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

message = message_data ['MSG'];
like = message_data ['LIKE'];
user = message_data ['USER'];
console.log(message);
console.log(like);
console.log(user);

user_tag = "<h4>"+user+"</h4>"
msg_tag = "<h4>"+message+"</h4>"
like_button = `<button class='btn btn-primary' id=${firebase_message_id} onclick=update(this.id) value=${like}>`
span_tag = `<span class='glyphicon glyphicon-thumbs-up'>Like :${like}</span></button><br>`
row = user_tag+msg_tag+like_button+span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room name")
      localStorage.removeItem("user")
      window.location="index.html"
}
function update(message_id){
  likes = document.getElementById(message_id).value;
  updated_likes = Number(likes) + 1;
  firebase.database().ref(room_name).child(message_id).update({
        LIKE : updated_likes
  });
}
