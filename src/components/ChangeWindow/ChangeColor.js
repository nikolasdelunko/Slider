import React, { useState } from "react";
import { Option, Select, Input, Text } from "./Style";
import { BoxMain } from "../Text/Style";

export default function ChangeColor() {
  const [color, setColor] = useState(null);
  const [opacity, setOpacity] = useState(0);


  return (
    <BoxMain>
      <Select
        onChange={(e) => {
					setColor(e.target.value);
        }}
      >
        <Option value="null" selected>
          change color
        </Option>
        <Option value="blue">blue</Option>
        <Option value="white">white</Option>
        <Option value="green">green</Option>
        <Option value="yellow">yellow</Option>
        <Option value="black">black</Option>
      </Select>
      <Text>Change background opacity</Text>
      <Input
        onChange={(e) => {
          setOpacity(e.target.value);
        }}
        type="range"
        min="1"
        max="100"
        id="myRange"
      />
    </BoxMain>
  );
}
