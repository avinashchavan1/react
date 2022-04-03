import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isvalid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.label}>E-Mail</label>
      <input
        type={props.type}
        id={props.email}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
