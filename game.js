const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
let userIndex=0

let soundNames = ['red', 'blue', 'green' ,  'yellow'];

let redDiv= document.getElementById('red')
let blueDiv= document.getElementById('blue')
let greenDiv= document.getElementById('green')
let yellowDiv= document.getElementById('yellow')
let divsquare = document.querySelectorAll('.row div')


redDiv.addEventListener('click', function() {
    const userClick = "red";
    userClickedPattern.push(userClick);
    console.log("red div pressed");
    check(userClickedPattern[userClick]);
    
});
greenDiv.addEventListener('click', function() {
    const userClick = "green";
    userClickedPattern.push(userClick);
    console.log("green div pressed");
    check(userClickedPattern[userClick]);
});

yellowDiv.addEventListener('click', function() {
    const userClick = "yellow";
    userClickedPattern.push(userClick);
    console.log("yellow div pressed");
    check(userClickedPattern[userClick]);
});

blueDiv.addEventListener('click', function() {
    const userClick = "blue";
    userClickedPattern.push(userClick);
    console.log("blue div pressed");
    check(userClickedPattern[userClick]);
});
//redDiv.addEventListener('click',function(){
    //userClickedPattern.push(redDiv);
    //console.log("you pressed red!");

//})
//blueDiv.addEventListener('click',function(){
//    userClickedPattern.push(redDiv);
//    console.log("you pressed blue!");
//
//})
//greenDiv.addEventListener('click',function(){
//    userClickedPattern.push(redDiv);
//    console.log("you pressed green!");
//
//})
//yellowDiv.addEventListener('click',function(){
//    userClickedPattern.push(redDiv);
//    console.log("you press yellow!");
//
//})

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
    //function main(){
    //    for(let i=0;i<5;i++){
    //        divsquare[i].addEventListener('click',function(event){
    //            let clickedButton = event.target;
                //let color = clickedButton.id;
    //            console.log(color);
    //            userClickedPattern.push(color);
//

           //     clickedButton.classList.add('pressed');
    //            //console.log("hii")
   // //            setTimeout(function(){
    //                clickedButton.classList.remove("pressed")
    //        },1000)


    //        })
    //    }
    //    check(color);


    //}
    //main();
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
           change(randomButton);
           //let selectedSoundName = soundNames[random];
           //console.log(selectedSoundName);
           playSound(randomButton);
            //let soundPath = `sounds/${selectedSoundName}.mp3`;
            //let audio = new Audio(soundPath);
            //audio.play();
            //let buttonElement = document.getElementById(randomButton);
  //
            //buttonElement.classList.add('pressed');
            //setTimeout(function(){
                //buttonElement.classList.remove("pressed")
            //},1000)
 
            
    }
    //function pressedButtom()
    
    function change(Color) {
        const button = document.getElementById(Color);
       button.classList.add("pressed");
       setTimeout(() => {
          button.classList.remove("pressed");
    }, 1000);
}
        
        
    function check(color){


        //if (arraysAreEqual(userClickedPattern,gamePattern)){
        if (userClickedPattern[color] === gamePattern[color]) {
           nextSequence();
        }
        //if (color === gamePattern[userIndex]){
        //    userIndex++;
        //    console.log("gfd");
        //     nextSequence();
 //
        //}
        else{
            gameOver();
        }
        function playSound(color) {
            let selectedSoundName = soundNames[color];
            let soundPath = `sounds/${selectedSoundName}.mp3`;
            let audio = new Audio(soundPath);
            audio.play();
           
        }
    }
    function gameOver(){
        console.log("you faill!!!!")
        document.body.style.background="red";
        document.querySelector("body").classList.add("game-over");

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
    



