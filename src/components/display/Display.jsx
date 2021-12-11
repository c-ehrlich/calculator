import React from "react";
import useStore from "../../store";
import styled from "styled-components";
import DisplayBorder from "./DisplayBorder";

const DisplayText = styled.span`
  margin: 0;
  padding: 0;
  color: rgb(63, 63, 63);
  font-family: "D7Mono";
  font-size: 48px;
`;

const Display = () => {
  const display = useStore((state) => state.display);
  return (
    <DisplayBorder>
      <DisplayText id="display">{display}</DisplayText>
    </DisplayBorder>
  );
};

export default Display;
