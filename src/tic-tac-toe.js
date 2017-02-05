class TicTacToe {
    constructor() {
      this.field = [[null, null, null], [null, null, null],[null, null, null]];
      this.play = 0;
    }

    getCurrentPlayerSymbol() {
      if (!(this.play % 2)) {
        return 'x';
      } else {
        return 'o';
      }

    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null) {
        this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.play++;
      }
    }

    isFinished() {
      if (this.getWinner() || this.noMoreTurns()) {
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      if (this.field[0][0] == this.field[1][0] && this.field[1][0] == this.field[2][0] && this.field[2][0] != null) {
        return this.field[0][0];
      } else if (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1] && this.field[2][1] != null) {
        return this.field[0][1];
      } else if (this.field[0][2] == this.field[1][2] && this.field[1][2] == this.field[2][2] && this.field[2][2] != null) {
        return this.field[0][2];
      } else if (this.field[0][0] == this.field[0][1] && this.field[0][1] == this.field[0][2] && this.field[0][2] != null) {
        return this.field[0][0];
      } else if (this.field[1][0] == this.field[1][1] && this.field[1][1] == this.field[1][2] && this.field[1][2] != null) {
        return this.field[1][0];
      } else if (this.field[2][0] == this.field[2][1] && this.field[2][1] == this.field[2][2] && this.field[2][2] != null) {
        return this.field[2][0];
      } else if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[2][2] != null) {
        return this.field[0][0];
      } else if (this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2] && this.field[0][2] != null) {
        return this.field[2][0];
      } else {
          return null;
      }

    }

    noMoreTurns() {
      if (this.play == 9) {
        return true;
      } else {
        return false;
      }

    }

    isDraw() {
      if (this.noMoreTurns() && !this.getWinner()) {
        return true;
      } else {
        return false
      }
    }

    getFieldValue(rowIndex, columnIndex) {
      return this.field[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
