import React from "react";
import { MainBox, Text, Cross } from "./Style";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

export default function Modal({ text, element }) {
	const dispatch = useDispatch();
  return (
    <MainBox>
			<Cross onClick={()=>{
				dispatch(openModal(null))
			}}>X</Cross>
      <Text>{text}</Text>
			{element}
    </MainBox>
  );
}
