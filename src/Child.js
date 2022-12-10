import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onColorChange, color }) {
  const clickHandler = () => {
    onColorChange(getRandomColor());
  };

  return (
    <div
      className="child"
      style={{ backgroundColor: color }}
      onClick={clickHandler}
    />
  );
}

export default Child;
