// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAiYOj7870FitBxrNu1_jva9BTx-wd32U",
    authDomain: "covid19-bot-lwobeq.firebaseapp.com",
    databaseURL: "https://covid19-bot-lwobeq-default-rtdb.firebaseio.com",
    projectId: "covid19-bot-lwobeq",
    storageBucket: "covid19-bot-lwobeq.appspot.com",
    messagingSenderId: "784773129754",
    appId: "1:784773129754:web:a84f778fd9f019f9acd3a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";    
}