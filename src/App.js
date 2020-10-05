import React from "react";
import "./App.css";
import Board from "./components/Board";


function Help(){
  return window.open("")
}

function App() {
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <Board />
      <button className="help" onClick={Help}>Help</button>
    </div>
  );
}

export default App;
