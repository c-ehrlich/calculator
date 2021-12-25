import React from "react";
import styled from "styled-components";

const FullScreenModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFullScreenModal = styled.div`
  border-radius: 8px;
  background-color: white;
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 600px;
  max-width: 90%;
`;

const FullScreenModal = (props) => {
  return (
    <FullScreenModalBackground onClick={props.closeModal}>
      <StyledFullScreenModal onClick={(e) => e.stopPropagation()}>
        {props.children}
      </StyledFullScreenModal>
    </FullScreenModalBackground>
  );
};

export default FullScreenModal;
