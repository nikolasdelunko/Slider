import React from "react";
import { Input, BoxMain } from "./Style";
import {
  Option,
  Select
} from "../ChangeWindow/Style";

export default function ChangeText() {
  return (
    <BoxMain>
      <Input placeholder="head text" />
      <Input placeholder="Description" />
			
			<Select>
			<Option value="white" selected>white</Option>
		<Option value="">
			blue
		</Option>
		<Option value="white">grey</Option>
		<Option value="green">green</Option>
		<Option value="yellow">yellow</Option>
		<Option value="black">black</Option>
	</Select>
    </BoxMain>
  );
}
