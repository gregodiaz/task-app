import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from '../../store/taskStore/tasksSlice.js'

export default function Statistics() {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const style = Style();

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
