import React from "react";
import { BtnGroup, BtnBlockMain, PageCounter } from "./Style";
import Sizes from "../theme/icons/Sizes";
import { ArrowLeft, ArrowRight } from "../theme/icons/Arrow";
import Gap from "../theme/icons/Gap";
import { useSelector, useDispatch } from "react-redux";
import { setPage, openModal } from "../../store/helpers/helpersSlice";

export default function ButtonMain() {
  const page = useSelector((state) => state.helpers.page);
  const dispatch = useDispatch();
  return (
    <BtnBlockMain>
      <BtnGroup primary>
        <div
          onClick={() => {
            dispatch(setPage(1));
          }}
        >
          <ArrowLeft />
        </div>
      </BtnGroup>
      <BtnGroup primary>
        <div
          onClick={() => {
            dispatch(openModal(0.1));
          }}
        >
          <Sizes width={"55px"} padding={"0 20px"} />
        </div>
        <PageCounter>{page}</PageCounter>
        <div
          onClick={() => {
            dispatch(openModal(0.2));
          }}
        >
          <Gap />
        </div>
      </BtnGroup>
      <BtnGroup primary>
        <div
          onClick={() => {
            dispatch(setPage(2));
          }}
        >
          <ArrowRight />
        </div>
      </BtnGroup>
    </BtnBlockMain>
  );
}
