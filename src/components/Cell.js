import React from "react";
import { mineColor } from "../util/mineColors";
import "../App.css";
import Circle from "./Circle";

export default function Cell({ details, updateFlag, revealCell }) {
  const cellstyle = {
    background: details.revealed
      ? details.value === "X"
        ? mineColor()
        : bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
    color: numColorCode(details.value),
  };

  return (
    <div
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
      style={cellstyle}
      className="cellStyle"
    >
      {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          <Circle />
        ) : (
          details.value
        )
      ) : (
        ""
      )}
    </div>
  );
}

const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#d0dbda";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#c5f0e9";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#c5f0e9";
  } else {
    return "#d0dbda";
  }
};

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#36bfc2";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#7dfcff";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#7dfcff";
  } else {
    return "#36bfc2";
  }
};

const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};
