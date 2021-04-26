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
var weaponChoices = document.getElementById('weaponChoices');

// classicBtn.addEventListener('click', function() {
//   changeView(choiceView, mainView);
// });
window.addEventListener('DOMContentLoaded', getStorageData);
mainView.addEventListener('click', function(event) {
  game.chooseMode(event);
  changeView(choiceView, mainView);
  renderChoices();
})
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
  element.classList.remove('static');
}

function disable(element) {
  element.classList.add('static');
}

function renderChoices() {
  weaponChoices.innerHTML = ''
  for (var i = 0; i < game.choices.length; i++) {
    var weapon = game.choices[i];
    weaponChoices.innerHTML += `
    <div class="weapon-container">
      <img class="weapon" src="assets/${weapon}.png" id="${weapon}">
    </div>
    `;
  }
}

function showPlayerSelection(event) {
  event.target.closest('div').innerHTML += `
  <img class="player-icon selector" src="assets/happy.png">
  `
}

function playGame(event) {
  var humanChoice = event.target.id;
  game.computer.takeTurn();
  game.human.takeTurn(humanChoice);
  displayWinnerText();
  showPlayerSelection(event);
  disable(choiceView);
  disable(changeGameBtn);
  setTimeout(function() {
    changeView(resultsView, choiceView);
    updateWins();
    show(changeGameBtn);
    showResults(game.human, game.computer);
  }, 800);
}

function updateText(element, message) {
  element.innerText = message;
}

function displayWinnerText() {
  if (game.winner === 'human') {
    updateText(resultsText, 'You won!');
  } else if (game.winner === 'none') {
    updateText(resultsText, 'It\'s a draw!');
  } else {
    updateText(resultsText, 'The computer won!');
  }
}

function updateWins() {
  updateText(humanWinCount, game.human.wins);
  updateText(computerWinCount, game.computer.wins);
  game.human.saveWinsToStorage('human');
  game.computer.saveWinsToStorage('computer');
}

function showResults(human, computer) {
  humanResult.src = `assets/${human.currentChoice}.png`;
  compResult.src = `assets/${computer.currentChoice}.png`;
  setTimeout(function() {
    changeView(choiceView, resultsView);
    enable(changeGameBtn);
    enable(choiceView);
    renderChoices();
  }, 1500);
}

function changeGame() {
  changeView(mainView, resultsView);
  hide(choiceView);
  hide(changeGameBtn);
}

function getStorageData() {
  game.human.retrieveWinsFromStorage('human');
  game.computer.retrieveWinsFromStorage('computer');
  updateWins();
}

// console.log(`You chose: ${game.human.currentChoice}`);
// console.log(`Computer chose: ${game.computer.currentChoice}`);
