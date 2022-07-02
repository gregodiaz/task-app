import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const styledButton = {
    display: "flex",
    fontSize: "5rem",
    color: "#f2f2f2",
  };

  const buttons = [
    <Button key="tasks" sx={styledButton} onClick={() => navigate("/tasks")}>
      Tasks
    </Button>,
    <Button
      key="statistics"
      sx={styledButton}
      onClick={() => navigate("/statistics")}
    >
      Statistics
    </Button>,
    <Button key="admin" sx={styledButton} onClick={() => navigate("/admin")}>
      Admin
    </Button>,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 5,
        },
      }}
    >
      <ButtonGroup
        size="large"
        orientation="vertical"
        aria-label="large vertical contained button group"
        variant="text"
        color="warning"
        // fullWidth={true}
        sx={{
          display: "flex",
          alignItems: "center",
          // color options
          // 'secondary'
          // 'error'
          // 'info'
          // 'success'
          // 'warning'
        }}
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
