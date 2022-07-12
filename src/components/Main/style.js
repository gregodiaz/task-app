import React from "react";

export default function Style() {
  return {
    Tasks: {
      fontSize: "calc(5vw + 2rem)",
      color: "#f2f2f2",
      "&:hover": {
        background:
          "linear-gradient(to right, #282828 10%, #D95AF230 50%, #282828 90%)",
      },
    },

    Statistics: {
      fontSize: "calc(5vw + 2rem)",
      color: "#f2f2f2",
      "&:hover": {
        background:
          "linear-gradient(to right, #282828 10%, #655CDB30 50%, #282828 90%)",
      },
    },

    Admin: {
      fontSize: "calc(5vw + 2rem)",
      color: "#f2f2f2",
      "&:hover": {
        background:
          "linear-gradient(to right, #282828ff 10%, #E85A5630 50%, #282828ff 90%)",
      },
    },

    box: {
      display: "flex",
      alignItems: "center",
      height: "100vh",
    },
  };
}
