import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

export default function Admin() {
  const style = Style()

  return (
    <DefaultTemplate
      children={
        <div style={style.bg}>
          Admin
        </div>
      }
    />
  );
}
