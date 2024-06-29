const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
let soundNames = ['red', 'blue', 'green' ,  'yellow'];

let redDiv= document.getElementById('red')
let blueDiv= document.getElementById('blue')
let greenDiv= document.getElementById('green')
let yellowDiv= document.getElementById('yellow')


redDiv.addEventListener('click',function(){
    userClickedPattern.push(redDiv);
    console.log("you pressed red!");

})
blueDiv.addEventListener('click',function(){
    userClickedPattern.push(redDiv);
    console.log("you pressed blue!");

})
greenDiv.addEventListener('click',function(){
    userClickedPattern.push(redDiv);
    console.log("you pressed green!");

})
yellowDiv.addEventListener('click',function(){
    userClickedPattern.push(redDiv);
    console.log("you press yellow!");

})

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
   

});
        function nextSequence(){
            userClickedPattern=[];  
              level++;
              document.querySelector("#level-title").textContent = `Level ${level}`
            //started = true
            generate();
            //playAudio();
        }

        //simon randomly will choose a button
        function generate(){
            
           let random =  Math.floor((Math.random()*buttonColors.length));
           let randomButton = buttonColors[random];
           console.log(randomButton);
           gamePattern.push(randomButton);
           console.log(gamePattern);
           let selectedSoundName = soundNames[random];
           console.log(selectedSoundName);
            let soundPath = `sounds/${selectedSoundName}.mp3`;
            let audio = new Audio(soundPath);
            audio.play();
            //let buttonElement = document.getElementById(randomButton);
  
            //buttonElement.classList.add('pressed');
 
            
    }
    //function pressedButtom()
    
        
    function check(){


        if (arraysAreEqual(userClickedPattern,gamePattern)){
            nextSequence();

        }
        else{
            gameOver();
        }
    }
    function gameOver(){
        console.log("you faill!!!!")
        document.body.style.background="red";

        let gamePattern = [];
        let userClickedPattern = []
        let started = false
        let level = 0
       
document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})




    }
    



