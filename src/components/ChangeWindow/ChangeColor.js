import React from "react";
import { Option, Select, Input, Text } from "./Style";
import { BoxMain } from "../Text/Style";
import { fetchCardOperations } from "../../store/cards";
import { useSelector, useDispatch } from "react-redux";

export default function ChangeColor() {
  const dispatch = useDispatch();

  const changeEl = useSelector((state) => state.helpers.modal);
  const data = useSelector((state) => state.cards.card);
  const findData = data.find((el) => el.number === Math.floor(changeEl));

  return (
    <BoxMain>
      <Select
        onChange={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: e.target.value,
            opacity: findData?.opacity ? findData?.opacity : null,
          })(dispatch);
        }}
        onMouseDown={() => {}}
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
          fetchCardOperations.editCardInfo({
            number: 1,
            color: findData?.color ? findData?.color : null,
            opacity: e.target.value,
          })(dispatch);
        }}
        type="range"
        min="1"
        max="100"
        id="myRange"
      />
    </BoxMain>
  );
}
