import React from "react";
import "./Button.css";

const Button = (props) => {
  const onMouseEnter = (event, color, bgColor) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
  };

  const onMouseOut = (event, color, bgColor) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
  };

  return (
    <div className={props.className}>
      <a
        className="main-button"
        href={props.href}
        target={props.newTab && "_blank"}
        style={{
          color: props.body,
          backgroundColor: props.text,
          border: `solid 1px ${props.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, props.text, props.body)}
        onMouseOut={(event) => onMouseOut(event, props.body, props.text)}
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
