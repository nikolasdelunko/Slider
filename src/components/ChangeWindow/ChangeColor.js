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
      <Input
        onChange={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: e.target.value,
            opacity: findData?.opacity ? findData?.opacity : null,
            title: findData?.title,
            height: findData?.width ? findData?.width : 100,
            width: findData?.width ? findData?.width : 100,
						colorText: findData?.colorText && findData?.colorText,
          })(dispatch);
        }}
        type="color"
        id="head"
        name="head"
        value={findData?.color}
      />
      <Text>Change background opacity</Text>
      <Input
        onChange={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: findData?.color ? findData?.color : null,
            opacity: e.target.value,
            title: findData?.title,
            height: findData?.width ? findData?.width : 100,
            width: findData?.width ? findData?.width : 100,
						colorText: findData?.colorText && findData?.colorText,
          })(dispatch);
        }}
        type="range"
        min="30"
        max="100"
        id="myRange"
      />
    </BoxMain>
  );
}
