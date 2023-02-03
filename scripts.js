// Write your JavaScript code here.
function init() {
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shutteBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    let shuttleHeightAmout = Number(spaceShuttleHeight.innerText);


    //when the Take Off Button is clicked
    takeOffButton.addEventListener("click", event => {
        let responde = window.confirm("Confirm that the shutte is ready for takeoff");
        if (responde) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shutteBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 100000;
            rocket.setAttribute("style", "bottom: 50%; left: 40%; transition: all .4s ease-in-out;");
        }
    });

    //when the Land Button is clicked
    landButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shutteBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    //when the Abort Mission Button is clicked
    abortMissionButton.addEventListener("click", event => {
        let responde = window.confirm("Confirm that you want to abort the mission.");
        if (responde) {
            flightStatus.innerHTML = "Mission aborted.";
            shutteBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    // move the rocket
        //clicking Up Bottom
    upButton.addEventListener("click", function () {
        let rocketPosition = parseInt(rocket.style.bottom);
        if (rocketPosition < 75) {
            rocket.style.bottom = rocketPosition + 5 + "%";
        }
        shuttleHeightAmout += 10000;
        spaceShuttleHeight.innerText = shuttleHeightAmout;
    });

    //clicking Down Bottom
    downButton.addEventListener("click", function () {
        let rocketPosition = parseInt(rocket.style.bottom);
        if (rocketPosition > 0) {
            rocket.style.bottom = rocketPosition - 5 + "%";
        }
        shuttleHeightAmout -= 10000;
        spaceShuttleHeight.innerText = shuttleHeightAmout;
    });
    

    //clicking Left Bottom 
    leftButton.addEventListener("click", function () {
        let rocketPosition = parseInt(rocket.style.left);
        if (rocketPosition < 85) {
            rocket.style.left = rocketPosition + 5 + "%";
        }
    });


        // let toStart = parseInt(currentLeft)
        // if (Number.isNaN(toStart)) {
        //     currentLeft = currentLeft - 10 + "px";
        //     rocket.style.left = currentLeft;
        // } else {
        //     currentLeft = toStart - 10 + "px";
        //     rocket.style.left = currentLeft;
        // }
    // });

        //clicking Right Bottom 
    rightButton.addEventListener("click", function () {
        let rocketPosition = parseInt(rocket.style.left);
        if (rocketPosition >= 0) {
            rocket.style.left = rocketPosition - 5 + "%";
        }
            // let toStart = parseInt(currentLeft)
            // console.log(toStart)
            // console.log(currentLeft);
            // if (Number.isNaN(toStart)) {
            //     currentLeft = currentLeft + 10 + "px";
            //     rocket.style.left = currentLeft;
            // } else {
            //     currentLeft = toStart + 10 + "px";
            //     rocket.style.left = currentLeft;
            // }
        });

} 

window.addEventListener("load", init);
// Remember to pay attention to page loading!
