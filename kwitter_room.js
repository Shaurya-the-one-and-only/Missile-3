const firebaseConfig = {
      apiKey: "AIzaSyC53MIoAsvgBtaXy8SNftVHsfIBSo2FPQQ",
      authDomain: "kwitter-2237c.firebaseapp.com",
      databaseURL: "https://kwitter-2237c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2237c",
      storageBucket: "kwitter-2237c.appspot.com",
      messagingSenderId: "1061531070837",
      appId: "1:1061531070837:web:0364c34a4ca251535f633c",
      measurementId: "G-BYMJ15CXJY"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =
    "Welcome" + user_name + "!";

    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}

    // Initialize Firebase


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}