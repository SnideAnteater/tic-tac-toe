"use client";
import React, { SetStateAction, useState } from "react";
import Tile from "./Tile";

const Tiles = ({ onWinFunction }: any) => {
  const boardArray = [
    { id: 0, player: "" },
    { id: 1, player: "" },
    { id: 2, player: "" },
    { id: 3, player: "" },
    { id: 4, player: "" },
    { id: 5, player: "" },
    { id: 6, player: "" },
    { id: 7, player: "" },
    { id: 8, player: "" },
  ];

  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  const [board, setBoard] = useState(boardArray);
  const [win, setWin] = useState(false);

  const handleClick = (index: { id: number; player: string }) => {
    if (!win) {
      const newBoard = [...board];
      if (index.player == "") {
        newBoard[index.id].player = "X";
        setBoard(newBoard);
        if (newBoard.some((e) => e.player === "")) {
          changeAnotherTile();
        }
        checkWinCondition();
      }
    }
  };

  const changeAnotherTile = () => {
    const newBoard = [...board];
    let randomTileNumber = Math.floor(Math.random() * newBoard.length);
    while (newBoard[randomTileNumber].player != "") {
      randomTileNumber = Math.floor(Math.random() * newBoard.length);
      if (newBoard[randomTileNumber].player == "") {
        break;
      }
    }
    newBoard[randomTileNumber].player = "O";
    setBoard(newBoard);
  };

  const checkWinCondition = () => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a].player !== "" &&
        board[a].player == board[b].player &&
        board[a].player == board[c].player
      ) {
        setWin(true);
        if (board[a].player === "X") {
          onWinFunction("You Win! \n Refresh to try again");
        } else {
          onWinFunction("You Lose! \n Refresh to try again");
        }
        // console.log(board[a].player);
      }
    }
  };

  return (
    <div className=" grid grid-cols-3 gap-3">
      {board.map((index) => (
        <Tile
          key={index.id}
          player={index.player}
          handleClick={() => handleClick(index)}
        ></Tile>
      ))}
    </div>
  );
};

export default Tiles;
