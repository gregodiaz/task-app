import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

export default function Admin() {
  return (
    <DefaultTemplate
      children={
        <div style={Style()}>
          Admin
        </div>
      }
    />
  );
}
