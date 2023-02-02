// Write your JavaScript code here.
function init() {
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shutteBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shutte = document.getElementById("shutte");

    takeOffButton.addEventListener("click", event => {
        let responde = window.confirm("Confirm that the shutte is ready for takeoff");
        if (responde) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shutteBackground.style.backgroundColor = "blue";
            shutte.setAttribute("style", "position: absolute");
            spaceShuttleHeight.innerHTML = 10000;
        }
    })

} 

window.addEventListener("load", init);
// Remember to pay attention to page loading!
