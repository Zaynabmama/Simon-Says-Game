const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];   //simon
let userClickedPattern = []  
let started = false
let level = 0
const soundNames = ['red', 'blue', 'green', 'yellow']

//let redDiv= document.getElementById('red')
//let blueDiv= document.getElementById('blue')
//let greenDiv= document.getElementById('green')
//let yellowDiv= document.getElementById('yellow')
//const soundNames = ['red', 'blue', 'green', 'yellow']

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }

})
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;
    let i = Math.floor(Math.random() * 4);
    let simonChoose = buttonColors[i];
    shadow(simonChoose);
    let soundPath = `sounds/${simonChoose}.mp3`;
    let audio = new Audio(soundPath);
    audio.play();
    gamePattern.push(simonChoose);
    console.log('simon choose'+gamePattern)
    
}

function userClick() {
    for (let i = 0; i < 5; i++) {
        let color = buttonColors[i];
        let userclick = document.getElementById(color);
        userclick.addEventListener('click', () => {
           
            userClickedPattern.push(color); 
            console.log('you choose'+userClickedPattern);
            let soundPath = `sounds/${color}.mp3`;
            let audio = new Audio(soundPath);
            audio.play(); 
            console.log('hi')
            shadow(color);
            checkAns();
            
        });
    }
}
function shadow(color) {
    let btn = document.getElementById(color);
    btn.classList.add("pressed");
    setTimeout(() => {
        btn.classList.remove("pressed");
    }, 100);
}

function playSound(color) {
    let selectedSoundName = soundNames[color];
    let soundPath = `sounds/${selectedSoundName}.mp3`;
    let audio = new Audio(soundPath);
    audio.play();
   
}

function checkAns() {
    let userindex = userClickedPattern.length - 1;
    if (userClickedPattern[userindex] !== gamePattern[userindex]) {
        gameOver();
        return;
    }
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(nextSequence, 1000);
    }
}

function gameOver() {
    console.log("Game Over");
    let soundPath = `sounds/wrong.mp3`;
    let audio = new Audio(soundPath);
    audio.play();
    document.querySelector("#level-title").textContent = `GAME OVER!`;
    //document.body.style.background = "red";
    document.querySelector("body").classList.add("game-over");
    setTimeout(() => {
        document.querySelector("body").classList.remove("game-over");
        //playSound(wrong)
        gamePattern = [];
        userClickedPattern = [];
        started = false;
        level = 0;
        document.querySelector("#level-title").textContent = "Press Any Key to Start"; 
    }, 100);
}
userClick();