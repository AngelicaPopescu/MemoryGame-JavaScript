initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
    getPictures()
    shuffledCards()
}


function startTimer(){
    let sec = 0, min = 0;
    window.interval = setInterval(function(){
        let timer = document.querySelector(".timer");
        timer.innerHTML = min + " Minutes " + sec + " Seconds";
        sec++;
        if(sec === 60){
            min++;
            sec=0;
        }
        window.secSave = sec - 1;
        window.minSave = min;
    },1000);
}


function getPictures() {
    let randomNumbers = []
    for (let i = 0; randomNumbers.length < 8; i++) {
        let randomNumber = Math.floor((Math.random() * 40) + 1);
        if (randomNumbers.includes(randomNumber)) {
        } else {
            randomNumbers.push(randomNumber);
        }
    }
    let cards = document.querySelectorAll(".card");
    let counter = 1;
    for (let card of cards) {
        if (counter % 2 === 1) {
            window.randomNumber = randomNumbers.pop();
        }
        card.children[0].setAttribute("src", "static/images/" + randomNumber + ".png");
        counter++;
    }
}


function shuffledCards() {
    let board = document.querySelector(".board-game");
    for (let i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);
    }
}


function checkCards() {

}
