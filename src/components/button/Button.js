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
        class="main-button"
        href={props.href}
        target={props.newTab && "_blank"}
        style={{
          color: props.theme.body,
          backgroundColor: props.theme.text,
          border: `solid 1px ${props.theme.text}`,
        }}
        onMouseEnter={(event) =>
          onMouseEnter(event, props.theme.text, props.theme.body)
        }
        onMouseOut={(event) =>
          onMouseOut(event, props.theme.body, props.theme.text)
        }
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
