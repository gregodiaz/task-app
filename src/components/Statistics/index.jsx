import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

export default function Statistics() {
  const style = Style()
//TODO: cambiar a <DefaultTemplate><div><div/></DefaultTemplate>
  return (
    <DefaultTemplate
      children={
        <div style={style.bg}>
          Statistics
        </div>
      }
    />
  );
}
