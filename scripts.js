//Business logic for addressBook//

function AddressBook() {
  this.destinations = {};
  this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

//Business logic for Destination//
function Destination (location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

//Destinations
let travelBook = new AddressBook();
let madrid = new Destination("Madrid", ["La Sagrada Familia", "Gran Via", "Plaza Mayor"], "fall");
let moscow = new Destination("Moscow", ["kremlin", "red square", "vodka centra"], "winter");
let sydney = new Destination("Sydney", ["Opera House", "Bondi Beach", "Tower Eye"], "summer");

travelBook.addDestination(madrid);
travelBook.addDestination(sydney);
travelBook.addDestination(moscow);


//User Interface logic

function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("destination").value;
  const pElement = document.createElement("p");
  const p = document.querySelector("p");
}

window.addEventListener("load", function(){
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});