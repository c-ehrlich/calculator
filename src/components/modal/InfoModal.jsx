import React from "react";
import styled from "styled-components";

const ModalHeader = styled.h1`
  font-family: "AGExtended";
  ${'' /* font-family: "AGRegular"; */}
`;

const ModalParagraph = styled.div`
  font-family: "AGRegular";
`;

const InfoModal = ({ closeModal }) => {
  return (
    <>
      <ModalHeader>Calculator</ModalHeader>
      <ModalParagraph>here's some text 12345</ModalParagraph>
      <button onClick={closeModal}>close</button>
    </>
  );
};

export default InfoModal;
