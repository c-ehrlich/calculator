import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 3px solid red;
  background-color: rgb(184, 189, 164);
  display: flex;
  justify-content: flex-end;
  padding: 8px 24px;

  border-top: 8px inset green;
  border-left: 8px inset blue;
  border-bottom: 16px inset red;
  border-right: 8px inset yellow;
`;

const DisplayInner = styled.div`
  width: 100%;
  background-color: yellow;
`;

const DisplayBorder = (props) => {
  return <StyledDisplay><DisplayInner>{props.children}</DisplayInner></StyledDisplay>;
};

export default DisplayBorder;
