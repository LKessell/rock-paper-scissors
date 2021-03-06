// Global Variables
var game = new Game();

// Query Selectors
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
var humanIcon = document.getElementById('humanIcon');
var humanName = document.getElementById('humanName');
var computerIcon = document.getElementById('computerIcon');
var computerName = document.getElementById('computerName');
var humanResultIcon = document.getElementById('humanResultIcon');
var compResultIcon = document.getElementById('compResultIcon');

// Event Listeners
window.addEventListener('DOMContentLoaded', setUpGame);
mainView.addEventListener('click', handleModeChoice);
changeGameBtn.addEventListener('click', returnToMain);
choiceView.addEventListener('click', handleWeaponChoice);

// Functions
const show = element => element.classList.remove('hidden');

const hide = element => element.classList.add('hidden');

const changeView = (shown, hidden) => {
  show(shown);
  hide(hidden);
}

const enable = element => element.classList.remove('static');

const disable = element => element.classList.add('static');

const updateText = (element, message) => element.innerText = message;

function setUpGame() {
  var human = game.human;
  var computer = game.computer;

  getStorageData();
  renderSidebar(humanIcon, humanName, human.name, human.icon, human.iconAlt);
  renderSidebar(computerIcon, computerName, computer.name, computer.icon, computer.iconAlt);
}

function renderSidebar(iconId, nameId, player, icon, altText) {
  iconId.src = icon;
  iconId.alt = altText;
  nameId.innerText = player;
}

function getStorageData() {
  game.human.retrieveWinsFromStorage('human');
  game.computer.retrieveWinsFromStorage('computer');
  updateWins();
}

function handleModeChoice(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  game.chooseMode(event);
  changeView(choiceView, mainView);
  renderChoices();
}

function handleWeaponChoice(event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }

  playGame(event);
}

function renderChoices() {
  weaponChoices.innerHTML = ''

  game.choices.forEach(weapon => {
    weaponChoices.innerHTML += `
      <div class="weapon-container">
        <img class="weapon" src="assets/${weapon}.png" alt="${weapon}" id="${weapon}">
      </div>
    `;
  })
}

function showPlayerSelection(event) {
  event.target.closest('div').innerHTML += `
    <img class="player-icon selector" src="${game.human.icon}" alt="${game.human.iconAlt}">
  `;
}

function playGame(event) {
  var humanChoice = event.target.id;

  game.computer.takeTurn();
  game.human.takeTurn(humanChoice);

  updateWinnerText();
  showPlayerSelection(event);
  disable(choiceView);
  disable(changeGameBtn);
  setTimeout(showGameOutcome, 800);
}

function showGameOutcome() {
  changeView(resultsView, choiceView);
  updateWins();
  renderResult(humanResult, game.human, humanResultIcon);
  renderResult(compResult, game.computer, compResultIcon);
  setTimeout(startNewRound, 1500);
}

function updateWinnerText() {
  switch (game.winner) {
    case 'human':
      updateText(resultsText, 'You won!');
      break;

    case 'none':
      updateText(resultsText, 'It\'s a draw!');
      break;

    case 'computer':
      updateText(resultsText, 'The computer won!');
      break;
  }
}

function updateWins() {
  updateText(humanWinCount, game.human.wins);
  updateText(computerWinCount, game.computer.wins);
  game.human.saveWinsToStorage('human');
  game.computer.saveWinsToStorage('computer');
}

function renderResult(image, player, playerIcon) {
  image.src = `assets/${player.currentChoice}.png`;
  image.alt = player.currentChoice;
  playerIcon.src = player.icon;
  playerIcon.alt = player.iconAlt;
}

function startNewRound() {
  game.resetBoard();
  changeView(choiceView, resultsView);
  show(changeGameBtn);
  enable(changeGameBtn);
  enable(choiceView);
  renderChoices();
}

function returnToMain() {
  changeView(mainView, resultsView);
  hide(choiceView);
  hide(changeGameBtn);
}
