import React from "react";
import NavBar from "../NavBar";

//TODO medio pija estar escribiendo props en todos lados, que tal algo tipo {children}?
export default function DefaultTemplate(props) {
  return (
    <div>
      <NavBar/>
      {props.children}
    </div>
  );
}
