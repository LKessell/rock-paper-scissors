class Game {
  constructor() {
    this.player1 = new Player('Human', '😄');
    this.player2 = new Player('Computer', '💻')
    this.type = 'classic';
    this.choices = ['rock', 'paper', 'scissors'];
  }

  checkForWin() {
    var humanWin =
      player1.currentChoice === 'rock' && player2.currentChoice === 'scissors' || player1.currentChoice === 'paper' && player2.currentChoice === 'rock' || player1.currentChoice === 'scissors' && player2.currentChoice === 'paper';

    if (humanWin) {
      console.log('You won!');
      player1.wins++;
    } else if (player1.currentChoice === player2.currentChoice) {
      console.log('It\'s a draw!');
    } else {
      console.log('Computer wins!');
      player2.wins++;
    }
  }

  resetBoard() {
  }
}

module.exports = Game;
