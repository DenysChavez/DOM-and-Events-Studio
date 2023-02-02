// Write your JavaScript code here.
function init() {
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shutteBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    // let shutte = document.getElementById("shutte");
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", event => {
        let responde = window.confirm("Confirm that the shutte is ready for takeoff");
        if (responde) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shutteBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 100000;
            // shutte.setAttribute("style", "position: absolute");

        }
    });

    landButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shutteBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    abortMissionButton.addEventListener("click", event => {
        let responde = window.confirm("Confirm that you want to abort the mission.");
        if (responde) {
            flightStatus.innerHTML = "Mission aborted.";
            shutteBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

} 

window.addEventListener("load", init);
// Remember to pay attention to page loading!
