import React from "react";
import "./TopButton.css";

const TopButton = (props) => {
  const GoUpEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: props.theme.body,
        backgroundColor: props.theme.text,
        border: `solid 1px ${props.theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(props.theme.text, props.theme.body)}
      onMouseLeave={() => onMouseLeave(props.theme.body, props.theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
};

export default TopButton;
