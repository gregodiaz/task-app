import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "90vw",
        backgroundColor: "#2f2f2f",
      }}
    >
      <button
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
          width: "35vw",
          fontSize: "3rem",
          color: "#2f2f2f",
        }}
        onClick={() => navigate("/tasks")}
      >
        Tasks
      </button>
      <button
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
          width: "35vw",
          fontSize: "3rem",
          color: "#2f2f2f",
        }}
        onClick={() => navigate("/statistics")}
      >
        Statistics
      </button>
      <button
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
          width: "35vw",
          fontSize: "3rem",
          color: "#2f2f2f",
        }}
        onClick={() => navigate("/admin")}
      >
        Admin
      </button>
    </div>
  );
}
