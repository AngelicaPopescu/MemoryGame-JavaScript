initGame();


let moves = 0
let g = 0

function initGame() {
    getPictures()
    shuffledCards()
}

function startTimer() {
    let sec = 1, min = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = '0 Minutes 0 Seconds'
    window.interval = setInterval(function () {
        timer.innerHTML = min + " Minutes " + sec + " Seconds";
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        window.secSave = sec - 1;
        window.minSave = min;
    }, 1000);
}

function moveCounter() {
    let moveCount = document.querySelector('.moves')
    moves++
    moveCount.innerHTML = moves + 'moves'
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
        card.addEventListener('click', openCard)
        counter++;
    }
}


function shuffledCards() {
    let board = document.querySelector(".board-game");
    for (let i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);
    }
}

function openCard(e) {
    if (document.querySelector(".timer").innerHTML === '0 Minutes 0 Seconds') {
        startTimer()
    }
    const cards = document.querySelectorAll('.card');
    let count = 0
    for (let card of cards) {
        if (card.id === '2') {
            count++
        }
    }
    if (count < 2) {
        e.currentTarget.id = '2';
        e.currentTarget.querySelector('img').classList.remove('hidden');

        checkPictures(cards)
    }
}


function checkPictures(cards) {
    let count = 0,
        src = '',
        openedCard;
    for (let card of cards) {
        if (card.id === '0') {
            count++
        }
        if (card.id === '2') {
            if (src === '') {
                src = card.querySelector('img').getAttribute('src')
                openedCard = card
            } else {
                moveCounter()
                if (card.querySelector('img').getAttribute('src') === src) {
                    card.id = '1'
                    card.classList.add('opened')
                    openedCard.id = '1'
                    openedCard.classList.add('opened')
                    card.removeEventListener('click', openCard)
                    openedCard.removeEventListener('click', openCard)
                } else {
                    setTimeout(() => {
                        card.querySelector('img').classList.add('hidden')
                        openedCard.querySelector('img').classList.add('hidden')
                        card.id = '0'
                        openedCard.id = '0'
                    }, 1000)

                }
            }
        }
    }
    if (count === 0) {
        alert('u winn')
    }
}
