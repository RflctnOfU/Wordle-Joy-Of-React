import React from "react";
import { KEYBOARD_LETTERS } from "../../data";

function Keyboard() {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        display: "flex",
        gap: "4px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {KEYBOARD_LETTERS.map((row, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "4px",
            // border: "2px solid black",
            justifyContent: "center",
          }}
        >
          {row.map((letter, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "4px",
                border: "solid 2px gray",
                width: "32px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                borderRadius: "4px",
              }}
              className={"letter"}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
