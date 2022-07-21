import React from "react";
import DefaultTemplate from "../../presentionals/DefaultTemplate";
import { style } from "./style.js";

export default function Admin() {
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
