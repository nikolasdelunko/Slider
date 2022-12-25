import React from "react";
import { Input, InputWert, BoxSizes } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardOperations } from "../../store/cards";

export default function ChangeSizes() {
  const dispatch = useDispatch();
  const changeEl = useSelector((state) => state.helpers.modal);
  const data = useSelector((state) => state.cards.card);
  const findData = data.find((el) => el.number === Math.floor(changeEl));

  return (
    <BoxSizes>
      <Input
        type="range"
        min="50"
        max="100"
        id="myRange"
        onMouseUp={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: findData?.color ? findData?.color : null,
            opacity: findData?.opacity ? findData?.opacity : null,
            height: findData?.width ? findData?.width : 100,
            width: e.target.value,
          })(dispatch);
        }}
      />
      <InputWert
        type="range"
        min="50"
        max="100"
        id="myRange"
        // value={`${findData.height}`}
        onMouseUp={(e) => {
          fetchCardOperations.editCardInfo({
            number: Math.floor(changeEl),
            color: findData?.color ? findData?.color : null,
            opacity: findData?.opacity ? findData?.opacity : null,
            height: e.target.value,
            width: findData?.width ? findData?.width : 100,
          })(dispatch);
        }}
      />
    </BoxSizes>
  );
}
