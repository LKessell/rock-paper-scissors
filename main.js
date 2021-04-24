var game = new Game();

var classicBtn = document.getElementById('classicBtn');
var challengeBtn = document.getElementById('challengeBtn');
var mainView = document.getElementById('mainView');
var choiceView = document.getElementById('choiceView');
var resultsView = document.getElementById('resultsView');
var humanWinCount = document.getElementById('humanWinCount');
var computerWinCount = document.getElementById('computerWinCount');

classicBtn.addEventListener('click', function() {
  changeView(choiceView, mainView);
});
choiceView.addEventListener('click', function(event) {
  playGame(event);
});

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function changeView(shown, hidden) {
  show(shown);
  hide(hidden);
}

function playGame(event) {
  var humanChoice = event.target.id;
  game.computer.takeTurn();
  game.human.takeTurn(humanChoice);
  changeView(resultsView, choiceView);
}

// console.log(`You chose: ${game.human.currentChoice}`);
// console.log(`Computer chose: ${game.computer.currentChoice}`);
