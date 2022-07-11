import React from "react";
import NavBar from "../NavBar";

export default function DefaultTemplate(props) {
  return (
    <div>
      <NavBar/>
      {props.children}
    </div>
  );
}
