var firebaseConfig = {
  apiKey: "AIzaSyCTowjDxjUOcvbXmlr9s0araV0XnvzXEAg",
  authDomain: "trainsheduler-5da42.firebaseapp.com",
  databaseURL: "https://trainsheduler-5da42.firebaseio.com",
  projectId: "trainsheduler-5da42",
  storageBucket: "",
  messagingSenderId: "994002078975",
  appId: "1:994002078975:web:1c5d68bc8ef39a7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();

  var newTrain = {
    train: trainName,
    destination: trainDestination,
    first: firstTrain,
    frequency: trainFrequency
  };

  



})
