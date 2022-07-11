import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

export default function Task() {
  return (
    <DefaultTemplate
      children={
        <div style={Style()}>
          Tasks
        </div>
      }
    />
  );
}
