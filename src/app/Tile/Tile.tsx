"use client";
import React, { MouseEventHandler, useState } from "react";

interface TileProps {
  player: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

const Tile = ({ player, handleClick }: TileProps) => {
  return (
    <div
      onClick={handleClick}
      className="box-content m-auto h-28 w-32 p-4 
        border-4 bg-green-500 m4 text-center content-center
        text-9xl"
    >
      {player}
    </div>
  );
};

export default Tile;
