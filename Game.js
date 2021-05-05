class Game {
  constructor() {
    this.human = new Player('Human', 'assets/happy.png', 'smiley face');
    this.computer = new Player('Computer', 'assets/robot.png', 'robot');
    this.type = null;
    this.choices = null;
    this.winner = null;
    this.winConditions = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper', 'lizard'],
      lizard: ['alien', 'paper'],
      alien: ['rock', 'scissors']
    }
  }

  checkForWin() {
    var humanChoice = this.human.currentChoice;
    var compChoice = this.computer.currentChoice;

    if (this.winConditions[humanChoice].includes(compChoice)) {
      this.human.wins++;
      this.winner = 'human';
      return;
    } else if (humanChoice === compChoice) {
      this.winner = 'none';
      return;
    } else {
      this.computer.wins++;
      this.winner = 'computer';
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
    this.winner = null;
    this.human.currentChoice = null;
    this.computer.currentChoice = null;
  }
}
