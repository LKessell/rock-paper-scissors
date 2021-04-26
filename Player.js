class Player {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    this.wins = 0;
    this.currentChoice;
  }

  saveWinsToStorage(player) {
    localStorage.setItem(player, this.wins)
  }

  retrieveWinsFromStorage(player) {
    var storageWins = localStorage.getItem(player)

    if (storageWins) {
      this.wins = storageWins;
    } else {
      this.wins = 0;
    }
  }

  takeTurn(playerInput) {
    if (this.name === 'Computer') {
      this.currentChoice = this.getRandomChoice();
    } else {
      this.currentChoice = playerInput;
      game.checkForWin();
    }
  }

  getRandomChoice() {
    var randomIndex = Math.floor(Math.random() * game.choices.length);
    return game.choices[randomIndex];
  }
}
