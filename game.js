const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
let soundNames = ['red', 'blue', 'green' ,  'yellow'];


document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
   

});
        function nextSequence(){
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
    }
    
        
    

    



