import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Style from "./style.js";

export default function Main() {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate("/task-app/" + path);
  const pages = ["Tasks", "Statistics", "Admin"];

  return (
    <Box sx={Style().box}>
      <ButtonGroup
        size="large"
        orientation="vertical"
        aria-label="large vertical contained button group"
        variant="text"
        color="secondary"
        sx={{ alignItems: "center" }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            sx={Style()[page]}
	    onClick={() => navigateTo(page)}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
