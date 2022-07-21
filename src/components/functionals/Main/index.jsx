import React, { useEffect } from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../../../store/userStore/usersSlice.js";
import { style }  from "./style.js";
import usersdb from "../../../dbInit/users.json";
import tasksdb from "../../../dbInit/tasks.json";

export default function Main() {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate("/task-app/" + path);
  const pages = ["Tasks", "Statistics", "Admin"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUser(usersdb[0]));
  }, []);
  
  return (
    <Box sx={style.box}>
      <ButtonGroup
        size="large"
        orientation="vertical"
        aria-label="large vertical contained button group"
        variant="text"
        color="secondary"
        sx={{ alignItems: "center" }}
      >
        {pages.map((page) => (
          <Button key={page} sx={style[page]} onClick={() => navigateTo(page)}>
            {page}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
