
var firebaseConfig = {
      apiKey: "AIzaSyAr6yO_xd1mu6Yt22KcrcdV_GQJXzwIN1A",
      authDomain: "kwitterrrrr.firebaseapp.com",
      databaseURL: "https://kwitterrrrr-default-rtdb.firebaseio.com",
      projectId: "kwitterrrrr",
      storageBucket: "kwitterrrrr.appspot.com",
      messagingSenderId: "892262559383",
      appId: "1:892262559383:web:97b3e0ebcfd3180e9ac3d2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html"
}
