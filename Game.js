class Game {
  constructor() {
    this.human = new Player('Human', 'assets/happy.png');
    this.computer = new Player('Computer', 'assets/robot.png')
    this.type = null;
    this.choices = null;
    this.winner = null;
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
      this.human.wins++;
      this.winner = 'human';
      return;
    }

    this.checkForDraw();
  }

  checkForDraw() {
    var humanChoice = this.human.currentChoice;
    var compChoice = this.computer.currentChoice;

    if (humanChoice === compChoice) {
      this.winner = 'none';
      return;
    }

    this.computer.wins++;
    this.winner = 'computer';
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
    this.winner = null;
    this.human.currentChoice = null;
    this.computer.currentChoice = null;
  }
}
