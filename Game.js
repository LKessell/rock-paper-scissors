class Game {
  constructor() {
    this.player1 = new Player('Human', '😄');
    this.player2 = new Player('Computer', '💻')
    this.type = 'classic';
    this.currentTurn;
    this.choices = ['rock', 'paper', 'scissors'];
  }
  checkForWin() {
    // Check player choice vs computer
    // win, lose, draw cases?
  }
  resetBoard() {
  }
}

module.exports = Game;
