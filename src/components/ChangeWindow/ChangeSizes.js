import React, { useState } from "react";
import { Input, InputWert, BoxSizes } from "./Style";

export default function ChangeSizes() {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  return (
    <BoxSizes>
      <Input
        type="range"
        min="1"
        max="100"
        id="myRange"
        onChange={(e) => {
          setHorizontal(e.target.value);
        }}
      />
      <InputWert
        type="range"
        min="1"
        max="100"
        id="myRange"
        onChange={(e) => {
          setVertical(e.target.value);
        }}
      />
    </BoxSizes>
  );
}
