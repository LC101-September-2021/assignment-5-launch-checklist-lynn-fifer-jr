// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   
    // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">

                
   */
}

// function validateInput(input) {
 
// }

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//    console.log(validateInput(pilot))
// }

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         response.json().then(function(json){
//         })
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
//     Math.floor(Math.random() * json.length + 1)
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
