import React from "react";
import DefaultTemplate from "../../presentionals/DefaultTemplate";
import { style } from "./style.js";

export default function TaskList() {
  return (
    <DefaultTemplate>
      <div style={style.bg}>
        Tasks
      </div>
    </DefaultTemplate>
  );
}
