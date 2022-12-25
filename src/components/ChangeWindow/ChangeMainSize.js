import React from "react";
import { Input, InputWert, BoxSizes, Text, Box, BoxH } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardOperations } from "../../store/cards";

export default function ChangeMainSizes() {
  const dispatch = useDispatch();
  const changeEl = useSelector((state) => state.helpers.modal);
  const data = useSelector((state) => state.cards.card);
  const findData = data.find((el) => el.number === Math.floor(changeEl));

  return (
    <BoxSizes>
      <Box>
        <Text>Upper box</Text>
        <Input
          type="range"
          min="00"
          max="50"
          id="myRange"
          onMouseUp={(e) => {
            fetchCardOperations.editCardInfo({
              number: Math.floor(changeEl),
              upperBlock: e.target.value,
              downBlock: findData?.downBlock && findData?.downBlock,
              upperLine: findData?.upperLine && findData?.upperLine,
              downLine: findData?.downLine && findData?.downLine,
            })(dispatch);
          }}
        />
        <Text>Bottom box</Text>
        <Input
          type="range"
          min="0"
          max="50"
          id="myRange"
          onMouseUp={(e) => {
            fetchCardOperations.editCardInfo({
              number: Math.floor(changeEl),
              upperBlock: findData?.upperBlock && findData?.upperBlock,
              downBlock: e.target.value,
              upperLine: findData?.upperLine && findData?.upperLine,
              downLine: findData?.downLine && findData?.downLine,
            })(dispatch);
          }}
        />
      </Box>
			<Box>
			<Text>hight boxes</Text>
      <BoxH>
        <InputWert
          type="range"
          min="0"
          max="300"
          id="myRange"
          // value={`${findData.height}`}
          onMouseUp={(e) => {
            fetchCardOperations.editCardInfo({
              number: Math.floor(changeEl),
              upperBlock: findData?.upperBlock && findData?.upperBlock,
              downBlock: findData?.downBlock && findData?.downBlock,
              upperLine: e.target.value,
              downLine: findData?.downLine && findData?.downLine,
            })(dispatch);
          }}
        />
        <InputWert
          type="range"
          min="0"
          max="300"
          id="myRange"
          // value={`${findData.height}`}
          onMouseUp={(e) => {
            fetchCardOperations.editCardInfo({
              number: Math.floor(changeEl),
              upperBlock: findData?.upperBlock && findData?.upperBlock,
              downBlock: findData?.downBlock && findData?.downBlock,
              upperLine: findData?.upperLine && findData?.upperLine,
              downLine: e.target.value,
            })(dispatch);
          }}
        />
      </BoxH>
			</Box>
    </BoxSizes>
  );
}
