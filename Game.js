class Game {
  constructor() {
    this.human = new Player('Human', '😄');
    this.computer = new Player('Computer', '💻')
    this.type = null;
    this.choices = null;
  }

  checkForWin() {
    var humanChoice = this.human.currentChoice;
    var compChoice = this.computer.currentChoice;
    var humanWin =
      humanChoice === 'rock' && compChoice === 'scissors' ||
      humanChoice === 'paper' && compChoice === 'rock' ||
      humanChoice === 'scissors' && compChoice === 'paper';

    if (humanWin) {
      updateText(resultsText, 'You won!');
      this.human.wins++;
    } else if (humanChoice === compChoice) {
      updateText(resultsText, 'It\'s a draw!');
    } else {
      updateText(resultsText, 'The computer won!');
      this.computer.wins++;
    }

    updateWins();
  }

  chooseMode(event) {
    if (event.target.closest('button').id === 'classicBtn') {
      this.type = 'classic';
      this.choices = ['rock', 'paper', 'scissors'];
    } else {
      this.type = 'challenge';
      this.choices = ['rock', 'paper', 'scissors', 'lizard', 'alien'];
    }
  }

  resetBoard() {
  }
}
