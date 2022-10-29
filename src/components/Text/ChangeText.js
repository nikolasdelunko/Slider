import React from "react";
import { Input, BoxMain } from "./Style";

export default function ChangeText() {
  return (
    <BoxMain>
      <Input placeholder="head text" />
      <Input placeholder="Description" />
    </BoxMain>
  );
}
