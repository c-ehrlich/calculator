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
  border: 1px solid black;
  font-family: "AGRegular";
  font-size: 20px;
  border-radius: 50%;
  box-shadow: 0px 3px 8px #111, inset 0px 2px 3px #777;
  ${(props) => {
    switch (props.type) {
      case "black":
        return `background-color: black;
                color: white;`;
      case "brown":
        return `background-color: rgb(88, 65, 15);
                color: white;`;
      case "green":
        return `background-color: rgb(1, 75, 32);
                color: white`;
      case "yellow":
        return `background-color: rgb(253, 219, 28);
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
