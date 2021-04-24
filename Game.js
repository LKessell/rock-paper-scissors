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
      updatePrompt('You won!');
      this.human.wins++;
    } else if (humanChoice === compChoice) {
      updatePrompt('It\'s a draw!');
    } else {
      updatePrompt('The computer won!');
      this.computer.wins++;
    }
  }

  resetBoard() {
  }
}
