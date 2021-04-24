var game = new Game();

var classicBtn = document.getElementById('classicBtn');
var challengeBtn = document.getElementById('challengeBtn');
var changeGameBtn = document.getElementById('changeGameBtn');
var mainView = document.getElementById('mainView');
var choiceView = document.getElementById('choiceView');
var resultsView = document.getElementById('resultsView');
var humanWinCount = document.getElementById('humanWinCount');
var computerWinCount = document.getElementById('computerWinCount');
var humanResult = document.getElementById('humanResult');
var compResult = document.getElementById('compResult');
var resultsText = document.getElementById('resultsText');

classicBtn.addEventListener('click', function() {
  changeView(choiceView, mainView);
});
changeGameBtn.addEventListener('click', changeGame);
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

function enable(element) {
  element.disabled = false;
}

function disable(element) {
  element.disabled = true;
}

function playGame(event) {
  var humanChoice = event.target.id;
  game.computer.takeTurn();
  game.human.takeTurn(humanChoice);
  changeView(resultsView, choiceView);
  show(changeGameBtn);
  disable(changeGameBtn);
  showResults(game.human, game.computer);
}

function updateText(element, message) {
  element.innerText = message;
}

function updateWins() {
  updateText(humanWinCount, game.human.wins);
  updateText(computerWinCount, game.computer.wins);
}

function showResults(human, computer) {
  humanResult.src = `assets/${human.currentChoice}.png`;
  compResult.src = `assets/${computer.currentChoice}.png`;
  setTimeout(function() {
    changeView(choiceView, resultsView);
    enable(changeGameBtn);
  }, 2000);
}

function changeGame() {
  changeView(mainView, resultsView);
  hide(choiceView);
  hide(changeGameBtn);
}

// console.log(`You chose: ${game.human.currentChoice}`);
// console.log(`Computer chose: ${game.computer.currentChoice}`);
