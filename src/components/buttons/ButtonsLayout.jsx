import styled from "styled-components";
import useStore from "../../store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  // faEquals, // TODO bring back after passing FCC requirements
  faMinus,
  faPercent,
  faPlus,
  faSquareRootAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const StyledButtonsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

// TODO bring back after passing FCC requirements
// const WhiteDot = styled.div`
//   width: 6px;
//   height: 6px;
//   border: none;
//   background-color: white;
//   border-radius: 50%;
// `;

const ButtonsLayout = () => {
  // TODO clear all passDownIDs after passing FCC requirements

  // calculator functions that are the same in reg and sci modes
  const sciMode = useStore((state) => state.sciMode);
  const inputNumber = useStore((state) => state.inputNumber);
  const inputInverse = useStore((state) => state.inputInverse);
  const inputClear = useStore((state) => state.inputClear);
  const inputSqrt = useStore((state) => state.inputSqrt);
  const inputPercent = useStore((state) => state.inputPercent);
  const inputDecimal = useStore((state) => state.inputDecimal);
  const inputNegative = useStore((state) => state.inputNegative);

  // calculator functions that are different in reg and sci modes
  const inputPlus = useStore((state) => sciMode ? state.sciInputPlus : state.inputPlus);
  const inputMinus = useStore((state) => sciMode ? state.sciInputMinus : state.inputMinus);
  const inputTimes = useStore((state) => sciMode ? state.sciInputTimes : state.inputTimes);
  const inputDivideBy = useStore((state) => sciMode ? state.sciInputDivideBy : state.inputDivideBy);
  const inputEquals = useStore((state) => sciMode ? state.sciInputEquals : state.inputEquals);

  const inputMPlus = useStore((state) => state.inputMPlus);
  const inputMMinus = useStore((state) => state.inputMMinus);
  const inputMRecall = useStore((state) => state.inputMRecall);
  const inputMClear = useStore((state) => state.inputMClear);
  
  return (
    <StyledButtonsLayout>
      <Button type="green" clickFn={inputMPlus}>
        <span>M +</span>
      </Button>
      <Button type="green" clickFn={inputMMinus}>
        M –
      </Button>
      <Button type="green" clickFn={inputMRecall}>
        MR
      </Button>
      <Button type="green" clickFn={inputMClear}>
        MC
      </Button>
      <Button type="green" clickFn={inputNegative}>
        +/-
      </Button>
      <Button type="brown" clickFn={inputSqrt}>
        <FontAwesomeIcon icon={faSquareRootAlt} />
      </Button>
      <Button type="black" passDownId="seven" clickFn={() => inputNumber(7)}>
        7
      </Button>
      <Button type="black" passDownId="eight" clickFn={() => inputNumber(8)}>
        8
      </Button>
      <Button type="black" passDownId="nine" clickFn={() => inputNumber(9)}>
        9
      </Button>
      <Button type="brown" passDownId="divide" clickFn={inputDivideBy}>
        <FontAwesomeIcon icon={faDivide} />
      </Button>
      <Button type="brown" passDownId="percent" clickFn={inputPercent}>
        <FontAwesomeIcon icon={faPercent} />
      </Button>
      <Button type="black" passDownId="four" clickFn={() => inputNumber(4)}>
        4
      </Button>
      <Button type="black" passDownId="five" clickFn={() => inputNumber(5)}>
        5
      </Button>
      <Button type="black" passDownId="six" clickFn={() => inputNumber(6)}>
        6
      </Button>
      <Button type="brown" passDownId="multiply" clickFn={inputTimes}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Button type="brown" passDownId="inverse" clickFn={inputInverse}>
        <span>
          X<sup>-1</sup>
        </span>
      </Button>
      <Button type="black" passDownId="one" clickFn={() => inputNumber(1)}>
        1
      </Button>
      <Button type="black" passDownId="two" clickFn={() => inputNumber(2)}>
        2
      </Button>
      <Button type="black" passDownId="three" clickFn={() => inputNumber(3)}>
        3
      </Button>
      <Button type="brown" passDownId="subtract" clickFn={inputMinus}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Button type="brown" passDownId="clear" clickFn={inputClear}>
        <span>CE</span>
        <span>C</span>
      </Button>
      <Button type="black" passDownId="zero" clickFn={() => inputNumber(0)}>
        0
      </Button>
      {/* TODO put a circular div in here instead */}
      <Button type="brown" passDownId="decimal" clickFn={inputDecimal}>
        .{/* <WhiteDot /> */}
      </Button>
      <Button type="yellow" passDownId="equals" clickFn={() => inputEquals()}>
        {/* <FontAwesomeIcon icon={faEquals} /> */}=
      </Button>
      <Button type="brown" passDownId="add" clickFn={inputPlus}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </StyledButtonsLayout>
  );
};

export default ButtonsLayout;
