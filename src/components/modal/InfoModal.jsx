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
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Key</th>
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
      </table>
      <ModalParagraph></ModalParagraph>
      <ModalParagraph>Click <a href="https://github.com/c-ehrlich/calculator/">here</a> to see the source code.</ModalParagraph>
      <button onClick={closeModal}>close</button>
    </>
  );
};

export default InfoModal;
