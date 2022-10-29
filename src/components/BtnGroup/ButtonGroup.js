import React from "react";
import Color from "../../components/theme/icons/Color";
import TextIco from "../../components/theme/icons/Text";
import SizesIco from "../../components/theme/icons/Sizes";
import DownloadIco from "../../components/theme/icons/Download";
import { openModal } from "../../store/helpers/helpersSlice";
import { useDispatch } from "react-redux";
import { BtnGroup } from "./Style";

export default function ButtonGroup({ color, text, sizes, download }) {
  const dispatch = useDispatch();

  return (
    <BtnGroup>
      <div
        onClick={() => {
          dispatch(openModal(color));
        }}
      >
        <Color />
      </div>
      <div
        onClick={() => {
          dispatch(openModal(text));
        }}
      >
        <TextIco />
      </div>
      <div
        onClick={() => {
          dispatch(openModal(sizes));
        }}
      >
        <SizesIco />
      </div>
      <div  onClick={() => {
          dispatch(openModal(download));
        }}>
        <DownloadIco />
      </div>
    </BtnGroup>
  );
}
