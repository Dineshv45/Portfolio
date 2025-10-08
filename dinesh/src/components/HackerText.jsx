import React, { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function HackerText({ text }) {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const startEffect = () => {
    const id = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char) =>
            char === " " ? " " : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("")
      );
    }, 60);
    setIntervalId(id);
  };

  const stopEffect = () => {
    clearInterval(intervalId);
    setDisplayText(text);
  };

  return (
    <h1 
      onMouseOver={startEffect}
      onMouseLeave={stopEffect}
      className="heading cursor-pointer select-none"
    >
      {displayText}
    </h1>
  );
}

export default HackerText;
