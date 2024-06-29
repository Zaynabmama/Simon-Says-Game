const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
let userIndex=0
let redDiv= document.getElementById('red')
let blueDiv= document.getElementById('blue')
let greenDiv= document.getElementById('green')
let yellowDiv= document.getElementById('yellow')
//let divsquare = document.querySelectorAll('.row div')


redDiv.addEventListener('click', function() {
    const userClick = "red";
    //animatePress(yellow);
    redDiv.classList.add("pressed");
    setTimeout(() => {
        redDiv.classList.remove("pressed");
    }, 1000);
    userClickedPattern.push(userClick);
    //playSound(green);
    console.log("red div pressed");
    check(userClickedPattern[userClick]);
    
});
greenDiv.addEventListener('click', function() {

    const userClick = "green";
    //animatePress(yellow);
    greenDiv.classList.add("pressed");
    setTimeout(() => {
        greenDiv.classList.remove("pressed");
    }, 1000);
    userClickedPattern.push(userClick);
    //playSound(green);
    console.log("green div pressed");
    check(userClickedPattern[userIndex]);
});

yellowDiv.addEventListener('click', function() {
    const userClick = "yellow";
   // animatePress(yellow);
   yellowDiv.classList.add("pressed");
    setTimeout(() => {
        yellowDiv.classList.remove("pressed");
    }, 1000);
    userClickedPattern.push(userClick);
   // playSound(blue);
    console.log("yellow div pressed");
    check(userClickedPattern[userIndex]);
});

blueDiv.addEventListener('click', function() {
    const userClick = "blue";
   // animatePress(blue);
   blueDiv.classList.add("pressed");
    setTimeout(() => {
        blueDiv.classList.remove("pressed");
    }, 1000);
    userClickedPattern.push(userClick);
    console.log("blue div pressed");
    //playSound(blue);
    check(userClickedPattern[userIndex]);
});

function animatePress(color) {
    document.getElementById(color).classList.add("pressed");
    setTimeout(() => {
        document.getElementById(color).classList.remove("pressed");
    }, 1000);
}
document.addEventListener('keypress', function() {
    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`;
        nextSequence();
        started = true;
    }
});




function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    let selectedSoundName = buttonColors[randomNumber];
    console.log(selectedSoundName);
    //playSound(randomButton);
    let soundPath = `sounds/${selectedSoundName}.mp3`;
    let audio = new Audio(soundPath);
    audio.play();
    animatePress(randomColor);
}


function check() {
    if (userClickedPattern[userIndex] === gamePattern[userIndex]) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    else {
        gameOver();
    }
}

function gameOver() {
    console.log("Game Over");
    document.body.style.background = "red";
    document.querySelector("body").classList.add("game-over");
    setTimeout(() => {
        document.querySelector("body").classList.remove("game-over");
        gamePattern = [];
        userClickedPattern = [];
        started = false;
        level = 0;
        document.querySelector("#level-title").textContent = "Press Any Key to Start"; 
    }, 1000);
}


