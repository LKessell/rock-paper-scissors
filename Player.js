class Player {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    this.wins = 0;
    this.currentChoice;
  }

  saveWinsToStorage() {
    // Implement local storage in later iteration
  }

  retrieveWinsFromStorage() {
    // Implement local storage in later iteration
  }

  takeTurn(playerInput) {
    if (this.name === 'Human') {
      this.currentChoice = playerInput;
      game.checkForWin();
    } else {
      this.currentChoice = this.getRandomChoice();
    }
  }

  getRandomChoice() {
    var randomIndex = Math.floor(Math.random() * game.choices.length);
    return game.choices[randomIndex];
  }
}
