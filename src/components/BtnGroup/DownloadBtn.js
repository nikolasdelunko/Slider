import React, { useState, useRef } from "react";
import { Btn, InpPhoto, BoxBtn } from "./Style";

export default function DownloadBtn() {
  const [file, setFile] = useState();
  const filePicker = useRef(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <BoxBtn>
      <InpPhoto
        type="file"
        onChange={handleChange}
        accept="image/*, .png, jpg, .gif, .web,"
        ref={filePicker}
      ></InpPhoto>
      <Btn
        onClick={handlePick}
      >
        Select Image
      </Btn>
      <Btn>Download image</Btn>
    </BoxBtn>
  );
}
