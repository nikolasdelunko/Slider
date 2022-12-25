import React from "react";
import { Input, BoxMain } from "./Style";
import { fetchCardOperations } from "../../store/cards";
import { useSelector, useDispatch } from "react-redux";

export default function ChangeText() {
  const dispatch = useDispatch();

  const changeEl = useSelector((state) => state.helpers.modal);
  const data = useSelector((state) => state.cards.card);
  const findData = data.find((el) => el.number === Math.floor(changeEl));

  return (
    <BoxMain>
      <Input
        placeholder={findData?.title ? findData?.title : "write title"}
        onChange={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: findData?.color ? findData?.color : null,
            opacity: findData?.opacity ? findData?.opacity : null,
            height: findData?.height ? findData?.height : 100,
            width: findData?.width ? findData?.width : 100,
            title: e.target.value,
						colorText: findData?.colorText && findData?.colorText,
          })(dispatch);
        }}
      />
{/* 
      <Input
        placeholder="Description"
        onChange={(e) => {
          // setDescription(e.target.value);
        }}
      /> */}

      <Input
        onChange={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: findData?.color ? findData?.color : null,
            opacity: findData?.opacity ? findData?.opacity : null,
            title: findData?.title,
            height: findData?.width ? findData?.width : 100,
            width: findData?.width ? findData?.width : 100,
            colorText: e.target.value,
          })(dispatch);
        }}
        type="color"
        id="head"
        name="head"
        value={findData?.color}
      />
    </BoxMain>
  );
}
