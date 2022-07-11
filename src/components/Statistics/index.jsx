import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

export default function Statistics() {
  return (
    <DefaultTemplate
      children={
        <div style={Style()}>
          Statistics
        </div>
      }
    />
  );
}
