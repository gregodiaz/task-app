import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";
import { useSelector } from "react-redux";

export default function Statistics() {
  const tasksState = useSelector((state) => state.tasks);
  const style = Style();

  console.log(tasksState)

  return (
    <DefaultTemplate
      children={
        <div style={style.bg}>
          Tasks
        </div>
      }
    />
  );
}
