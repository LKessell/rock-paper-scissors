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
    if (!playerInput) {
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
