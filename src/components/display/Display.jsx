import React from "react";
import useStore from "../../store";
import styled from "styled-components";
import DisplayBorder from "./DisplayBorder";

const DisplayText = styled.span`
  margin: 0;
  padding: 0;
  color: rgb(106, 117, 93);
  font-family: "D7Mono";
  font-size: 36px;
  height: 32px;

  &.power {
    color: rgba(0,0,0,0.55)
  }
`;

const Display = () => {
  const power = useStore((state) => state.power);
  const display = useStore((state) => state.display);

  return (
    <DisplayBorder>
      <DisplayText id="display" className={power && "power"}>{display}</DisplayText>
    </DisplayBorder>
  );
};

export default Display;
