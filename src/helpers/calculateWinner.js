const calculateWinner = (squares) => {
  const lines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Check if any of the winning lines have all X's or all O's
  for (let i = 0; i < lines.length; i++) {
    // Destructure the line into variables a, b, c
    const [a, b, c] = lines[i];
    if (
      // Check if the squares at a, b, and c are all X's or all O's
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      // Return the winner ('X' or 'O')
      return squares[a];
    }
  }
  // If none of the winning lines have all X's or all O's, return null
  return null;
};

export default calculateWinner;
