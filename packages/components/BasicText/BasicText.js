import React from "react";
import "./BasicText.scss";

export const BasicText = props => (
  <p className="text" {...props}>
    {props.children}
  </p>
);