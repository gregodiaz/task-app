import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../../store/taskStore/tasksSlice.js";
import DefaultTemplate from "../../presentionals/DefaultTemplate";
import { style } from "./style.js";

export default function Statistics() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
