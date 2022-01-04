let minutStart = 10;
let secondStart = 0;

secondCurrent = secondStart;
minutCurrent = minutStart;
blinkToggle = "1";


window.onload = () => {
    mainDiv = document.createElement('div');
    mainDiv.className = "main flex center row"
    document.body.appendChild(mainDiv);


    minutDiv = document.createElement('div');
    mainDiv.appendChild(minutDiv);
    minutDiv.innerHTML = minutCurrent;


    blink = document.createElement('div');
    blink.className = "blink";
    mainDiv.appendChild(blink);
    blink.innerHTML = ":";


    secondDIv = document.createElement('div');
    mainDiv.appendChild(secondDIv);
    secondDIv.innerHTML = secondCurrent;
    setInterval(() => {
        if (secondCurrent == 0) {
            secondCurrent = 60;
            minutCurrent = minutCurrent - 1;
            minutDiv.innerHTML = minutCurrent;
        } else {
            secondCurrent = secondCurrent - 1;
        }
        secondDIv.innerHTML = secondCurrent;
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


