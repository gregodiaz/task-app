import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const styledButton = {
    fontSize: "calc(5vw + 2rem)",
    color: "#f2f2f2",
  };

  const buttons = [
    <Button
      key="tasks"
      sx={styledButton}
      onClick={() => navigate("/task-app/tasks")}
    >
      Tasks
    </Button>,
    <Button
      key="statistics"
      sx={styledButton}
      onClick={() => navigate("/task-app/statistics")}
    >
      Statistics
    </Button>,
    <Button
      key="admin"
      sx={styledButton}
      onClick={() => navigate("/task-app/admin")}
    >
      Admin
    </Button>,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ButtonGroup
        size="large"
        orientation="vertical"
        aria-label="large vertical contained button group"
        variant="text"
        color="warning"
        // 'warning'
        // 'secondary'
        // 'error'
        // 'info'
        // 'success'
        sx={{ alignItems: "center" }}
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
