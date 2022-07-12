import React from "react";

export default function Style() {
  return {
    appBar: {
      backgroundColor: "#2f2f2f",
      width: "100vw",
    },

    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      height: "9vh",
    },

    iconButton: {
      p: 0,
      color: "#f2f2f2",
    },

    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      background: "linear-gradient(to right , #474747, #2f2f2f)",
      height: "9vh",
      width: "15vw",
      minWidth: 143,
      paddingLeft: 3,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 43,
    },

    menuItems: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      height: "7vh",
      background:
        "linear-gradient(to right , #474747 0%, #474747 30%, #2f2f2f00 80%)",
      minWidth: 143,
      paddingLeft: 2,
      marginBottom: 0.3,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 43,
      "&:hover": {
        // background: "linear-gradient(to right , #655CDB30 0%, #2f2f2f00 50%)",
        background:
          "linear-gradient(to right , #655CDB50  0%, #655CDB50 30%, #2f2f2f00 80%)",
      },
    },

    menu: {
      mt: "45px",
      ml: 3,
      "& .MuiPaper-root": {
        backgroundColor: "#00000000",
        color: "#f2f2f2",
      },
    },

    topAndRight: {
      vertical: "top",
      horizontal: "right",
    },
  };
}
