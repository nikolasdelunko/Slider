import React from "react";
import { Input, InputWert, BoxSizes } from "./Style";

export default function ChangeSizes() {
  return (
    <BoxSizes>
      <Input type="range" min="1" max="100" id="myRange" />
      <InputWert type="range" min="1" max="100" id="myRange" />
    </BoxSizes>
  );
}
