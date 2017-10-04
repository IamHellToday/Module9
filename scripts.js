let newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

let pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function(){
    playerPick('rock')
});
pickPaper.addEventListener('click', function(){
    playerPick('paper')
});
pickScissors.addEventListener('click', function(){
    playerPick('scissors')
});

//Starting values
let gameState = 'notStarted', 
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

//variables showing parts of game elements
let newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements(){
    switch(gameState){
        case 'started':
                newGameElem.style.display = 'none';
                pickElem.style.display = 'block';
                resultsElem.style.display = 'block';
            break;
        case 'ended':
                newGameBtn.innerText = 'Once again';
        case 'notStarted':
        default:
                newGameElem.style.display = 'block';
                pickElem.style.display = 'none';
                resultsElem.style.display = 'none';
    }
}
setGameElements();

let playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame(){
    player.name = prompt(`Please, share with me your name, 'imię gracza'`);
    if(player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        
    playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}

function playerPick(playerPick){
    console.log(playerPick);
}

let PlayerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function getComputerPick (){
    let possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick){
    playerResultElem.innerHTML = computerResultElem.innderHTML = '';
    
    let winnerIs = 'player';
    
        if (playerPick == computerPick){
            winnerIs = 'noone';
        } 
        else if (
            (computerPick == 'rock' && playerPick =='scissors') ||
            (computerPick == 'scissors' && playerPick =='paper') ||
            (computerPick == 'paper' && playerPick == 'rock')) {
            winnerIs = 'computer';
        }
        
        if (winnerIs == 'player'){
            playerResultElem.innerHTML = 'WIN!';
            player.score++;
        }
        else if (winnerIs == 'computer') {
            computerResultElem.inerHTML = 'WIN!'
            computer.score++;
        }
}

function playerPick(playerPick) {
    let computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
