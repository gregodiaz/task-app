import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { style } from "./style.js";
import { pages } from "../../../constants/";

export default function Main() {
  const navigate = useNavigate();
  const navigateTo = (page) => navigate("/task-app/" + page);

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
