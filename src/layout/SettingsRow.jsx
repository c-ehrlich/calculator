import React from "react";
import styled from "styled-components";

const StyledSettingsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${'' /* dirty hack: space reg/sci selector centred with button */}
  ${'' /* better solution: actually center it, make the labels a :before or something */}
  margin-right: 9px;
`;

const SettingsRow = (props) => {
  return <StyledSettingsRow>{props.children}</StyledSettingsRow>;
};

export default SettingsRow;
