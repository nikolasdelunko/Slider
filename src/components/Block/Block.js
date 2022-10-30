import React, { useState } from "react";
import {
  Block1,
  Title,
} from "./Style";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import ButtonGroup from "../BtnGroup/ButtonGroup";
import ChangeColor from "../ChangeWindow/ChangeColor";
import ChangeSizes from "../ChangeWindow/ChangeSizes";
import DownloadBtn from "../BtnGroup/DownloadBtn";
import ChangeText from "../Text/ChangeText";

//// !  its block for future changes

export default function Task1() {
  const modal = useSelector((state) => state.helpers.modal);
  const [btnOn, setBtnOn] = useState(false);

  const HoverSection = (sec) => {
    setBtnOn(sec);
  };

  const of = () => {
    setBtnOn(null);
  };


export default function Block() {
	return (
		<Block1 onMouseMove={() => HoverSection(1)} onMouseLeave={of}>
		<Title>1</Title>
		{modal === 1.1 && (
			<Modal text="Choose color" element={<ChangeColor />} />
		)}
		{modal === 1.2 && (
			<Modal
				text="Change text"
				element={<ChangeText placeholder="text" />}
			/>
		)}
		{modal === 1.3 && (
			<Modal text="Set hight & weight" element={<ChangeSizes />} />
		)}
		{modal === 1.4 && (
			<Modal text="Upload photo" element={<DownloadBtn />} />
		)}
		{!modal && btnOn === 1 && (
			<ButtonGroup
				color={1.1}
				text={1.2}
				sizes={1.3}
				download={1.4}
			/>
		)}
	</Block1>
	)
}
