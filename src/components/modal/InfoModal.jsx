import React from "react";
import styled from "styled-components";

const ModalHeader = styled.h1`
  font-family: "AGExtended";
  margin-top: 8px;
  margin-bottom: 16px;
  ${'' /* font-family: "AGRegular"; */}
`;

const ModalParagraph = styled.div`
  font-family: "AGRegular";
`;

const ModalTable = styled.table`
  max-width: 200px;
  background-color: white;
  border: 1px solid black;
  border-collapse: collapse;
  
  & th {
    border: 1px solid black;
    border-bottom: 2px solid black;
    padding: 4px;
    font-family: "AGRegular";
  }
  & td {
    border: 1px solid black;
    padding: 4px;
    font-family: "AGRegular";
  }
`;

const ModalCloseButton = styled.button`
  padding: 8px;
  font-family: "AGRegular";
  font-size: 16px;
`;

const InfoModal = ({ closeModal }) => {
  return (
    <>
      <ModalHeader>Calculator</ModalHeader>
      <ModalTable>
        <thead>
          <tr>
            <th>Command</th>
            <th>Shortcut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0-9</td>
            <td>0-9</td>
          </tr>
          <tr>
            <td>+, -, *, /</td>
            <td>+, -, *, /</td>
          </tr>
          <tr>
            <td>=</td>
            <td>=, Enter</td>
          </tr>
          <tr>
            <td>CE/C</td>
            <td>C, Backspace</td>
          </tr>
          <tr>
            <td>sqrt</td>
            <td>S</td>
          </tr>
          <tr>
            <td>%</td>
            <td>%, P</td>
          </tr>
          <tr>
            <td>x^-1</td>
            <td>I</td>
          </tr>
          <tr>
            <td>+/-</td>
            <td>N</td>
          </tr>
          <tr>
            <td>M+</td>
            <td>Q</td>
          </tr>
          <tr>
            <td>M-</td>
            <td>W</td>
          </tr>
          <tr>
            <td>MR</td>
            <td>E</td>
          </tr>
          <tr>
            <td>MC</td>
            <td>R</td>
          </tr>
        </tbody>
      </ModalTable>
      <ModalParagraph>The design of this app is a tribute to the iconic <a href="http://mycalcdb.free.fr/main.php?l=0&id=166">Braun ET66</a> Calculator.</ModalParagraph>
      <ModalParagraph>Click <a href="https://github.com/c-ehrlich/calculator/">here</a> to see the source code.</ModalParagraph>
      <ModalCloseButton onClick={closeModal}>close</ModalCloseButton>
    </>
  );
};

export default InfoModal;
