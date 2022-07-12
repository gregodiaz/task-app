import React from "react";

export default function Style() {
  return {
    bg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background:
        "linear-gradient(to right, #655CDB50 0%, #2f2f2f 60%, #2f2f2f 100%)",
    },

    box: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: '#f2f2f296',
      mt: '9vh',
      p: .3,
      height: "86vh",
      width: "96vw",
      borderTopLeftRadius: 6,
      borderTopRightRadius: 43,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 43,
    },
    
    card: {
      display: "flex",
      justifyContent: "left",
      alignItems: 'center',
      backgroundColor: '#f2f2f296',
      mt: 1,
      p: 3,
      height: 9,
      width: "90vw",
      borderTopLeftRadius: 6,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 40,
    },

    cardContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
    },

    typography: {
      my: 1,
      mx: "calc(3px + 3.8vw)",
    },
  };
}
