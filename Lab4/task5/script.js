var grayImg = "./assets/marble1.jpg";

var orangeImg = "./assets/marble2.jpg";

var currentIndex = 0;
var intervalId = null;

function moveMarble() {
    document.getElementById("img" + (currentIndex + 1)).src = grayImg;
    
    currentIndex++;
    if (currentIndex >= 5) {
        currentIndex = 0;
    }
    
    document.getElementById("img" + (currentIndex + 1)).src = orangeImg;
}

function startAnim() {
    if (intervalId === null) {
        intervalId = setInterval(moveMarble, 700);
    }
}

function stopAnim() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

for (var i = 1; i <= 5; i++) {
    document.getElementById("img" + i).src = grayImg;
}

document.getElementById("img1").src = orangeImg;
startAnim();