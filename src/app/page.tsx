"use client";

import Image from "next/image";
import Tile from "./Tile/Tile";
import Tiles from "./Tile/Tiles";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [winText, setWinText] = useState("");

  const winningText = (stringText: SetStateAction<string>) => {
    setWinText(stringText);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tiles onWinFunction={winningText}></Tiles>
      <div>{winText}</div>
    </main>
  );
}
