import React from "react";
import { Option, Select, Input, Text } from "./Style";
import { BoxMain } from "../Text/Style";

export default function ChangeColor() {
  return (
    <BoxMain>
      <Select>
        <Option value="" selected>
          blue
        </Option>
        <Option value="white">white</Option>
        <Option value="green">green</Option>
        <Option value="yellow">yellow</Option>
        <Option value="black">black</Option>
      </Select>
      <Text>Change background opacity</Text>
      <Input type="range" min="1" max="100" id="myRange" />
    </BoxMain>
  );
}
