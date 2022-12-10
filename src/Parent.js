import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState(getRandomColor());
  const [childColor, setChildColor] = useState("#fff");

  const changeColorHandler = (newChildColor) => {
    setColor(getRandomColor());
    setChildColor(newChildColor);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onColorChange={changeColorHandler} />
      <Child color={childColor} onColorChange={changeColorHandler} />
    </div>
  );
}

export default Parent;
