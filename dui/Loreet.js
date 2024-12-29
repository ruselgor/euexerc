const checkWin = (board, player, winCount) => {
  const size = board.length;

  // Check rows
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCount; j++) {
      if (board[i].slice(j, j + winCount).every(cell => cell === player)) {
        return true;
      }
    }
  }

  // Check columns
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCount; j++) {
      let isWinningColumn = true;
      for (let k = 0; k < winCount; k++) {
        if (board[j + k][i] !== player) {
          isWinningColumn = false;
          break;
        }
      }
      if (isWinningColumn) return true;
    }
  }

  // Check diagonals (top-left to bottom-right)
  for (let i = 0; i <= size - winCount; i++) {
    for (let j = 0; j <= size - winCount; j++) {
      let isWinningDiagonal = true;
      for (let k = 0; k < winCount; k++) {
        if (board[i + k][j + k] !== player) {
          isWinningDiagonal = false;
          break;
        }
      }
      if (isWinningDiagonal) return true;
    }
  }

  // Check diagonals (top-right to bottom-left)
  for (let i = 0; i <= size - winCount; i++) {
    for (let j = winCount - 1; j < size; j++) {
      let isWinningDiagonal = true;
      for (let k = 0; k < winCount; k++) {
        if (board[i + k][j - k] !== player) {
          isWinningDiagonal = false;
          break;
        }
      }
      if (isWinningDiagonal) return true;
    }
  }

  // If no win conditions are met, return false
  return false;
}

// Example usage:
const board = [
  ['X', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X']
];
const player = 'X';
const winCount = 3; // For example, in a 4x4 board, you might need 3 in a row to win
const result = checkWin(board, player, winCount);
console.log(result); // Output: true or false depending on the winning condition
