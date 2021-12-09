// Write your JavaScript code here!




 
window.addEventListener("load", function() {

    let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
   let pilotName = document.querySelector("input[name=pilotName]")
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
    alert('one or more fields are blank')
    event.preventDefault();
   }else if(isNaN(pilotName.value) === false || isNaN(copilotName.value) === false){
    alert('please enter a valid name')
    event.preventDefault();
   }else if(isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
    alert('please enter a valid number')
    event.preventDefault();
   }
   })
   


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});