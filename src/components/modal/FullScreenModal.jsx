import React from "react";
import styled from "styled-components";

const padding = 16;

const FullScreenModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - ${padding * 2}px); /* compensate for padding */
  height: calc(100% - ${padding * 2}px); /* compensate for padding */
  padding: ${padding}px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  overflow: scroll;
  /* justify-content: center;
  align-items: center; */
`;

const StyledFullScreenModal = styled.div`
  margin: auto;
  border-radius: 8px;
  background-color: white;
  display: flex;
  padding: 16px;
  overflow: scroll;
  flex-direction: column;
  gap: 8px;
  width: 400px;
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
