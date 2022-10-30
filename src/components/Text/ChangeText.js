import React, { useState } from "react";
import { Input, BoxMain } from "./Style";
import { Option, Select } from "../ChangeWindow/Style";

export default function ChangeText() {
  const [color, setColor] = useState(null);
	const [headText, setHeadText] = useState(null);
	const [description, setDescription] = useState(null);

  return (
    <BoxMain>
      <Input placeholder="head text"  onChange={(e) => {
          setHeadText(e.target.value);
        }} />
      <Input placeholder="Description"  onChange={(e) => {
          setDescription(e.target.value);
        }} />

      <Select
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <Option value="white" selected>
          white
        </Option>
        <Option value="blue">blue</Option>
        <Option value="grey">grey</Option>
        <Option value="green">green</Option>
        <Option value="yellow">yellow</Option>
        <Option value="black">black</Option>
      </Select>
    </BoxMain>
  );
}
