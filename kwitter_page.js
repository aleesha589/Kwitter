//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_key");
room = localStorage.getItem("room_key");
console.log("room name is" + room);

function getData() {
      firebase.database().ref("/" + room).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        namedb=message_data['name'];
                        messagedb=message_data['msg'];
                        likedb=message_data['like'];
                        nametag="<h4>"+namedb+"<img src='tick.png' class='user_tick'></h4>";
                        messagetag="<h4 class='message_h4'>"+messagedb+"</h4>";
                        liketag="<button class='btn btn-warning id="+firebase_message_id+" value="+likedb+" onclick='update_like(this.id)'>";
                        spantag="<span class='glyphicon glyphicon-thumbs-up'> LIKE:"+likedb+"</span> </button> <hr>";
                        row=nametag+messagetag+liketag+spantag;
                        document.getElementById("output").innerHTML+=row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      tweet = document.getElementById("msg").value;
      firebase.database().ref(room).push({
            name: user_name,
            msg: tweet,
            like: 0

      });
      document.getElementById("msg").value = "";


}
function update_like(message_id){
      console.log(message_id+"this button was clicked");
button_id=message_id;
console.log(button_id+"this is the button id");
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room).child(message_id).update({
like:updated_likes

});




}
