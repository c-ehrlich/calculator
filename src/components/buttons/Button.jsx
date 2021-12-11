import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  position: relative;

  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid purple;
  border-radius: 50%;
  ${(props) => {
    switch (props.type) {
      case "black":
        return `background-color: black;
                color: white;`;
      case "brown":
        return `background-color: brown;
                color: white;`;
      case "green":
        return `background-color: green;
                color: white`;
      case "yellow":
        return `background-color: yellow;
                color: black;`;
      default:
        return `background-color: pink;`;
    }
  }}
`;

const Button = (props) => {
  return <StyledButton id={props.passDownId} type={props.type}>{props.children}</StyledButton>;
};

export default Button;
