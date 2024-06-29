const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0


document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
        function nextSequence(){
            level++;
            document.querySelector("#level-title").textContent = `Level ${level}`
            started = true
        }
        function generate(){
            
            let random =  Math.floor((Math.random()*buttonColors.length));
            let randomButton = buttonColors[random];
            console.log(randomButton);
    }
    generate()
}
})

