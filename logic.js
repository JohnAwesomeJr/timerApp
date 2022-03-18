let minutStart = "10";
let secondStart = "00";
let pause = true;

secondCurrent = secondStart;
minutCurrent = minutStart;
blinkToggle = "1";


window.onload = () => {
    mainDiv = document.createElement('div');
    mainDiv.className = "main flex center row padding margin container"
    document.body.appendChild(mainDiv);


    minutDiv = document.createElement('div');
    minutDiv.className = "minute";
    mainDiv.appendChild(minutDiv);
    minutDiv.innerHTML = minutCurrent;


    blink = document.createElement('div');
    blink.className = "blink";
    mainDiv.appendChild(blink);
    blink.innerHTML = ":";


    pauseButton = document.createElement('div');
    pauseButton.className = "container padding margin flex center row handOnHover";
    document.body.appendChild(pauseButton);
    pauseButton.innerHTML = "Start";
    pauseButton.onclick = function () { playPause(); };


    secondDIv = document.createElement('div');
    mainDiv.appendChild(secondDIv);
    secondDIv.innerHTML = secondCurrent;
    setInterval(() => {
        if (pause == false) {



            if (secondCurrent == 0) {
                secondCurrent = 60;
                minutCurrent = minutCurrent - 1;
            } else {
                secondCurrent = secondCurrent - 1;
            }




            if (String(secondCurrent).length < 2) {
                addZeros = "0" + secondCurrent;
            } else {
                addZeros = secondCurrent;

            }



            if (String(minutCurrent).length < 2) {
                addZerosM = "0" + minutCurrent;
            } else {
                addZerosM = minutCurrent;

            }



            secondDIv.innerHTML = addZeros;
            minutDiv.innerHTML = addZerosM;
        }
    }, 1000)




    setInterval(() => {
        if (blinkToggle == "0") {
            blinkToggle = "1";
            blink.style.color = "hsla(0, 0%, 0%, 1)";
        } else {
            if (blinkToggle == "1") {
                blinkToggle = "0";
                blink.style.color = "hsla(0, 0%, 0%, 0)";
            }
        }
    }, 500);

}


function playPause() {
    if (pause == true) {
        pause = false;
        pauseButton.innerHTML = "Pause";
        pauseButton.style.background = "hsl(0, 72%, 89%)";
    } else {
        pause = true;
        pauseButton.innerHTML = "Start";
        pauseButton.style.background = "hsl(114, 72%, 89%)";
    }
}

let dsoggle3d = 1;
setInterval(() => {
    if (pause == false) {
        if (dsoggle3d == 1) {
            mainDiv.style.transform = "perspective(300px) rotatex(10deg)";

            dsoggle3d = 0;
        } else {
            if (dsoggle3d == 0) {
                mainDiv.style.transform = "perspective(300px) rotatex(-10deg)";

                dsoggle3d = 1;
            }
        }
    } else {
        mainDiv.style.transform = "perspective(300px) rotatex(0deg)";
    }
}, 1000)
