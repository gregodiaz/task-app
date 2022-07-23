import React from "react";
import NavBar from "../../functionals/NavBar";

export default function DefaultTemplate({children}) {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  );
}
