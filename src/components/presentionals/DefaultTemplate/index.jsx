import React from "react";
import NavBar from "../../functionals/NavBar";

export default function DefaultTemplate(props) {
  return (
    <div>
      <NavBar/>
      {props.children}
    </div>
  );
}
