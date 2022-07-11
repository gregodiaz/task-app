import React from "react";

export default function Style(bgcolor) {
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
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right , #474747, #2f2f2f)",
      height: "9vh",
      width: "15vw",
      minWidth: 143,
      paddingLeft: 2,
      borderTopLeftRadius: 43,
      borderBottomLeftRadius: 43,
    },
    topAndRight: {
      vertical: "top",
      horizontal: "right",
    },
    menuItems: {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      height: "5vh",
      // background: "#474747",
      // color: "#f2f2f2",
    },
  };
}
