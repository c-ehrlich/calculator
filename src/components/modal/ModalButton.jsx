import React from "react";
import styled from "styled-components";

const StyledModalButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  font-family: "AGRegular";
  font-size: 16px;
  border-radius: 50%;
  font-family: 'Orbitron', monospace;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const ModalButton = (props) => {
  return (
    <StyledModalButton onClick={props.openModal}><span>i</span></StyledModalButton>
  );
};

export default ModalButton;
