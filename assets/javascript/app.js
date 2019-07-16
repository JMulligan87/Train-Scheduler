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
  var firstTrain = moment($("#first-train-input").val().trim(), "HH:mm").format("X"); 
  var trainFrequency = $("#frequency-input").val().trim();

  var newTrain = {
    train: trainName,
    destination: trainDestination,
    first: firstTrain,
    frequency: trainFrequency
  };

  database.ref().push(newTrain);

  //console.log(newTrain.train);
  //console.log(newTrain.destination);
  //console.log(newTrain.first);
  //console.log(newTrain.frequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot){
  //console.log(childSnapshot.val());

  var trainName = childSnapshot.val().train;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().first;
  var trainFrequency = childSnapshot.val().frequency;

  var firstTrainNice = moment.unix(firstTrain).format("hh:mm");

  var trainTillArrival = moment().diff(moment(firstTrain, "X"), "minutes");
  console.log(trainTillArrival);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(firstTrainNice),
    $("<td>").text(trainTillArrival)
  );
  $("#train-table > tbody").append(newRow);
})
