class Player {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    this.wins = 0;
  }

  saveWinsToStorage() {
    // Implement local storage in later iteration
  }

  retrieveWinsFromStorage() {
    // Implement local storage in later iteration
  }

  takeTurn() {
    // Interacting with Game instance
    // Checking for win/draw conditions?
  }
}

module.exports = Player;
