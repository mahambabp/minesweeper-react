import React from "react";

export default function Circle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 30,
          width: 30,
          borderRadius: 20,
          background: "rgba(0,0,0,0.4)",
        }}
      ></div>
    </div>
  );
}
