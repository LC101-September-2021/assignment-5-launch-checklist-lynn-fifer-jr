// Write your JavaScript code here!







window.addEventListener("load", function () {


    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            let index = Math.floor(Math.random() * (json.length - 1))
            let missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[index].name} </li>
                <li>Diameter: ${json[index].diameter} </li>
                <li>Star: ${json[index].star}</li>
                <li>Distance from Earth: ${json[index].distance} </li>
                <li>Number of Moons: ${json[index].moons} </li>
            </ol>
            <img src="${json[index].image}">
            `
        })
    });

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]")
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert('one or more fields are blank')
            event.preventDefault();
        } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
            alert('please enter a valid name')
            event.preventDefault();
        } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert('please enter a valid number')
            event.preventDefault();
        } else {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`

            copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`
            faultyItems.style.visibility = "visible"
            if (fuelLevel.value < 10000) {
                faultyItems.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level is too low"
            } else {
                faultyItems.style.visibility = "visible"
                fuelStatus.innerHTML = "Fuel levels are green"
            }
            if (cargoMass.value > 10000) {
                faultyItems.style.visibility = "visible";
                cargoStatus.innerHTML = "Cargo mass too large"
            } else {
                cargoStatus.innerHTML = "Mass is stable"
            }
            if (cargoMass.value > 10000 || fuelLevel.value < 10000) {
                faultyItems.style.visibility = "visible";
                launchStatus.style.color = "red"
                launchStatus.innerHTML = "Shuttle is not ready"
            } else {

                launchStatus.style.color = "green"
                launchStatus.innerHTML = "Shuttle is good to go"
            }
            // myFetch();
            event.preventDefault();
        }
    })



    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    

});