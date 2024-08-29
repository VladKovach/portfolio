import React, { useState } from "react";
import Game from "./TicTackBoard/TicTackBoard";
import classes from "./TicTack.module.scss";

export default function TicTack() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  let currentSquares = history[currentMove];
  let xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(moveId) {
    setCurrentMove(moveId);
  }
  const movesList = history.map((squares, move) => {
    let description = "Go to move # ";
    if (move > 0) {
      description += move;
    } else {
      description = "Go to Game Srart";
    }
    return (
      <li key={move}>
        <button className="button-30" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });
  return (
    <div className={classes.game}>
      <Game
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        historyLenghts={history.length}
        currentMove={currentMove}
      />
      <div className={classes.game_info}>
        <ol>{movesList}</ol>
      </div>
    </div>
  );
}