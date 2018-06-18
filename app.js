// Rock, paper, scissors vars
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

// Logic vars
var output = document.getElementById('output');
var computerOptions = ['Rock', 'Paper', 'Scissors'];
var counterElement = document.getElementById('counterElement');
var counterInput = document.getElementById('counter');
var counter = 0;

// Game Logic

// Rock
rock.addEventListener('click', function () {
    output.style.visibility = 'visible';
    counterInput.style.visibility = 'visible';
    counterElement.style.visibility = 'visible';
    if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[0]) {
        output.innerHTML = 'The computer rolled: ' + computerOptions[0] + '.' + " It's" + ' a tie!';
        counterInput.innerHTML = counter;
    } else if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[1]) {
        counter = 0;
        output.innerHTML = 'The computer rolled: ' + computerOptions[1] + '. The computer wins!';
        counterInput.innerHTML = counter;
    } else {
        counter++;
        output.innerHTML = 'The computer rolled: ' + computerOptions[2] + '. You win!';
        counterInput.innerHTML = counter;
    }
});

// Paper
paper.addEventListener('click', function () {
    output.style.visibility = 'visible';
    counterInput.style.visibility = 'visible';
    counterElement.style.visibility = 'visible';
    if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[0]) {
        counter++;
        output.innerHTML = 'The computer rolled: ' + computerOptions[0] + '. You win!';
        counterInput.innerHTML = counter;
    } else if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[1]) {
        output.innerHTML = 'The computer rolled: ' + computerOptions[1] + " It's" + ' a tie!';
        counterInput.innerHTML = counter;
    } else {
        counter = 0;
        output.innerHTML = 'The computer rolled: ' + computerOptions[2] + '. The computer wins!';
        counterInput.innerHTML = counter;
    }
});

// Scissors
scissors.addEventListener('click', function () {
    output.style.visibility = 'visible';
    counterInput.style.visibility = 'visible';
    counterElement.style.visibility = 'visible';
    if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[0]) {
        counter = 0;
        output.innerHTML = 'The computer rolled: ' + computerOptions[0] + '. The computer wins!';
        counterInput.innerHTML = counter;
    } else if (computerOptions[Math.floor(Math.random() * 2)] === computerOptions[1]) {
        counter++;
        output.innerHTML = 'The computer rolled: ' + computerOptions[1] + '. You win!';
        counterInput.innerHTML = counter;
    } else {
        output.innerHTML = 'The computer rolled: ' + computerOptions[2] + " It's" + ' a tie!';
        counterInput.innerHTML = counter;
    }
});
