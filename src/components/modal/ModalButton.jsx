import React from "react";
import styled from "styled-components";

const StyledModalButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ModalButton = (props) => {
  return (
    <StyledModalButton onClick={props.openModal}>Info</StyledModalButton>
  );
};

export default ModalButton;
