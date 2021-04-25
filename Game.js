class Game {
  constructor() {
    this.human = new Player('Human', 'assets/happy.png');
    this.computer = new Player('Computer', 'assets/robot.png')
    this.type = null;
    this.choices = null;
  }

  checkForWin() {
    var humanChoice = this.human.currentChoice;
    var compChoice = this.computer.currentChoice;
    var humanWin =
      humanChoice === 'rock' && (compChoice === 'scissors' || compChoice === 'lizard') ||
      humanChoice === 'paper' && (compChoice === 'rock' || compChoice === 'alien') ||
      humanChoice === 'scissors' && (compChoice === 'paper' || compChoice === 'lizard') ||
      humanChoice === 'lizard' && (compChoice === 'alien' || compChoice === 'paper') ||
      humanChoice === 'alien' && (compChoice === 'rock' || compChoice === 'scissors');

    if (humanWin) {
      updateText(resultsText, 'You won!');
      this.human.wins++;
    } else if (humanChoice === compChoice) {
      updateText(resultsText, 'It\'s a draw!');
    } else {
      updateText(resultsText, 'The computer won!');
      this.computer.wins++;
    }
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
