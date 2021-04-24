var game = new Game();

var classicBtn = document.getElementById('classicBtn');
var challengeBtn = document.getElementById('challengeBtn');
var mainView = document.getElementById('mainView');
var choiceView = document.getElementById('choiceView');
var resultsView = document.getElementById('resultsView');
var humanWinCount = document.getElementById('humanWinCount');
var computerWinCount = document.getElementById('computerWinCount');
var humanResult = document.getElementById('humanResult');
var compResult = document.getElementById('compResult');

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
  showResults(game.human, game.computer);
}

function showResults(human, computer) {
  humanResult.src = `assets/${human.currentChoice}.png`;
  compResult.src = `assets/${computer.currentChoice}.png`;
  setTimeout(function() {changeView(choiceView, resultsView)}, 2000);
}

// console.log(`You chose: ${game.human.currentChoice}`);
// console.log(`Computer chose: ${game.computer.currentChoice}`);
