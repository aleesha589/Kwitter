//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBxErKAhr263SVvSiLJCN_ViAWIJnx8v4w",
      authDomain: "kwitter-94e5a.firebaseapp.com",
      databaseURL: "https://kwitter-94e5a-default-rtdb.firebaseio.com",
      projectId: "kwitter-94e5a",
      storageBucket: "kwitter-94e5a.appspot.com",
      messagingSenderId: "597791660446",
      appId: "1:597791660446:web:dc781544922489d3b05e8f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function redirect_to_room(name){
localStorage.setItem("room_key",name);
window.location="kwitter_page.html";


}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div onclick='redirect_to_room(this.id)'class='room_name' id="+Room_names+">"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();
user_name=localStorage.getItem("user_key");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom(){
room=document.getElementById("add_room").value;
firebase.database().ref("/").child(room).update({
      purpose:"Room added"
});
localStorage.setItem("room_key",room);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("room_key");
localStorage.removeItem("user_key");
window.location="index.html"
}


