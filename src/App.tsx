import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "./App.scss";

function App() {
  console.log("gday");
  return (
    <main
      className={clsx(
        "flex min-h-screen w-full flex-col",
        "place-items-center items-center justify-center" // centered
        // "absolute top-52 items-center" // height from top
      )}
    >
      <h1 className="text-3xl">Vite React starter</h1>
      <h2 className="text-xl">Vite + React + TS + Tailwind + Sass</h2>
    </main>
  );
}

export default App;
