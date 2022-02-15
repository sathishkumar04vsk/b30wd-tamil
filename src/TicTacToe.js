import { useState } from "react";
import * as React from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';

export function TicTacToe() {
  const [board, setBoard] = useState(
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  );
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const Winner = decideWinner(board);
  const [isXturn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    if (Winner === null && board[index] === null) {
      const Boradcopy = [...board];
      Boradcopy[index] = isXturn ? "X" : "O";
      setBoard(Boradcopy);
      setIsXTurn(!isXturn);
    }
  };

  const { width, height } = useWindowSize();

  return (
    <div className="board">
      <div className="box-group">
        {Winner ? <Confetti width={width} height={height} /> : " "}
        {board.map((val, index) => <GameBox val={val} onPlayerClick={() => handleClick(index)} />)}
      </div>
      {/* {Winner ? alert(`Winner is: ${Winner}`): ""} */}
      <h2>Winner is: {Winner}</h2>
      <IconButton color="primary" onClick={() => {
        setBoard([null, null, null, null, null, null, null, null, null]);
        setIsXTurn(true);
      }}>
        <RestartAltIcon />
      </IconButton>
    </div>
  );
}
function GameBox({ val, onPlayerClick }) {
  // const value="X";
  // const [val,setVal]=useState(null);
  const style = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div
      onClick={() => onPlayerClick()}
      style={style}
      className="game-box">{val}
    </div>);
}
