//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBJWIAsJI9pAYEEeGqFH7ZmixP0J_U8cXo",
      authDomain: "kwitter-422ef.firebaseapp.com",
      databaseURL: "https://kwitter-422ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-422ef",
      storageBucket: "kwitter-422ef.appspot.com",
      messagingSenderId: "745983432162",
      appId: "1:745983432162:web:1047e8918331f3cd7955bb"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value=""
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code




                        //End code
                  }
            });
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
//getData();