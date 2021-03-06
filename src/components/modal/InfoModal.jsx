import React from "react";
import styled from "styled-components";

const ModalHeader = styled.h1`
  font-family: "AGExtended";
  margin-top: 8px;
  margin-bottom: 16px;
  ${"" /* font-family: "AGRegular"; */}
`;

const ModalParagraph = styled.div`
  font-family: "AGRegular";
  margin-top: 8px;
  margin-bottom: 0px;
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
  margin-top: 8px;
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
      <ModalParagraph>
        The design of this app is a tribute to the iconic Braun{" "}
        <a href="https://www.garmmen.com/static/9420/612cd27c85ba2dd568c2a71c.jpg">
          ET 55
        </a>{" "}
        and <a href="http://mycalcdb.free.fr/main.php?l=0&id=166">ET 66</a>{" "}
        calculators.
      </ModalParagraph>
      <ModalParagraph>
        <div>REG mode uses Immediate Execution Logic:</div>
        <div>1 + 2 * 3 = 9</div>
      </ModalParagraph>
      <ModalParagraph>
        <div>SCI mode uses Formula/Expression Logic:</div>
        <div>1 + 2 * 3 = 7</div>
      </ModalParagraph>
      <ModalParagraph>
        More information about{" "}
        <a href="https://www.reddit.com/r/howto/comments/gs9ad/til_how_to_use_the_memory_functions_on_a/">
          how the Memory buttons work
        </a>
      </ModalParagraph>
      <ModalParagraph>
        View the{" "}
        <a href="https://github.com/c-ehrlich/calculator/">source code</a>.
      </ModalParagraph>
      <ModalCloseButton onClick={closeModal}>close</ModalCloseButton>
    </>
  );
};

export default InfoModal;
