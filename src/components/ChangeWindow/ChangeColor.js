import React from 'react'
import {
  Option,
  Select
} from "./Style";

export default function ChangeColor() {
	return (
		<Select>
		<Option value="" selected>
			blue
		</Option>
		<Option value="white">white</Option>
		<Option value="green">green</Option>
		<Option value="yellow">yellow</Option>
		<Option value="black">black</Option>
	</Select>
	)
}
