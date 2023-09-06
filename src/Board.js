import React from 'react';
import Square from './Square';
import calculateWinner from './helpers/calculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {
  const handleClick = (i) => {
    // If the square is already filled or if there is a winner, return early
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Create a copy of the squares array
    const nextSquares = squares.slice();
    // Mutate the copy, setting the i-th element to 'X' or 'O'
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Call the onPlay function with the nextSquares
    onPlay(nextSquares);
  };

  // Helper function to calculate the winner
  const winner = calculateWinner(squares);
  // Check if any of the winning lines have all X's or all O's
  let status;
  // Check if there is a winner
  if (winner) {
    // If there is a winner, set the status to display the winner
    status = 'Winner: ' + winner;
    // If there is no winner, set the status to display the next player.
  }
  // If there is no winner and there are still moves to make, set the status to display the next player.
  if (!winner && squares.includes(null)) {
    // Terinary operator: condition ? value if true : value if false
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  } else {
    // If there is no winner and there are no more moves to make, set the status to display 'No Winner Today'
    status = 'No Winner Today';
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
