import React from "react";
import buttonclass from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={buttonclass.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
