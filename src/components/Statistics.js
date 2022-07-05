import React from "react";
import ResponsiveAppBar from "./NavBar.js";

export default function Admin() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "90vw",
        }}
      >
        Statistics
      </div>
    </div>
  );
}
