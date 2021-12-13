import React from "react";
import styled from "styled-components";

const StyledSettingsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingsRow = (props) => {
  return <StyledSettingsRow>{props.children}</StyledSettingsRow>;
};

export default SettingsRow;
