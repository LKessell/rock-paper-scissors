class Game {
  constructor() {
    this.human = new Player('Human', '😄');
    this.computer = new Player('Computer', '💻')
    this.type = 'classic';
    this.choices = ['rock', 'paper', 'scissors'];
  }

  checkForWin() {
    var humanChoice = this.human.currentChoice;
    var compChoice = this.computer.currentChoice;
    var humanWin =
      humanChoice === 'rock' && compChoice === 'scissors' ||
      humanChoice === 'paper' && compChoice === 'rock' ||
      humanChoice === 'scissors' && compChoice === 'paper';

    if (humanWin) {
      console.log('You won!');
      this.human.wins++;
    } else if (humanChoice === compChoice) {
      console.log('It\'s a draw!');
    } else {
      console.log('Computer wins!');
      this.computer.wins++;
    }
  }

  resetBoard() {
  }
}
