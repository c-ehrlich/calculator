import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../../store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faEquals,
  faMinus,
  faPercent,
  faPlus,
  faSquareRootAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import plusMinusIcon from "../../media/PlusMinusIcon.svg";

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const ButtonImage = styled.img`
  width: 65%;
  height: 65%;
`;

const WhiteDot = styled.div`
  width: 6px;
  height: 6px;
  border: none;
  background-color: white;
  border-radius: 50%;
`;

const Buttons = () => {
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
  const inputPlus = useStore((state) =>
    sciMode ? state.sciInputPlus : state.inputPlus
  );
  const inputMinus = useStore((state) =>
    sciMode ? state.sciInputMinus : state.inputMinus
  );
  const inputTimes = useStore((state) =>
    sciMode ? state.sciInputTimes : state.inputTimes
  );
  const inputDivideBy = useStore((state) =>
    sciMode ? state.sciInputDivideBy : state.inputDivideBy
  );
  const inputEquals = useStore((state) =>
    sciMode ? state.sciInputEquals : state.inputEquals
  );

  const inputMPlus = useStore((state) => state.inputMPlus);
  const inputMMinus = useStore((state) => state.inputMMinus);
  const inputMRecall = useStore((state) => state.inputMRecall);
  const inputMClear = useStore((state) => state.inputMClear);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key.match(/\d/)) {
      inputNumber(e.key);
    } else {
      switch (e.key.toLowerCase()) {
        case ".":
          inputDecimal();
          break;
        case "+":
          inputPlus();
          break;
        case "-":
          inputMinus();
          break;
        case "*":
          inputTimes();
          break;
        case "/":
          inputDivideBy();
          break;
        case "=":
        case "Enter":
          inputEquals();
          break;
        case "c":
        case "Backspace":
          inputClear();
          break;
        case "s":
          inputSqrt();
          break;
        case "p":
        case "%":
          inputPercent();
          break;
        case "i":
          inputInverse();
          break;
        case "n":
          inputNegative();
          break;
        case "q":
          inputMPlus();
          break;
        case "w":
          inputMMinus();
          break;
        case "e":
          inputMRecall();
          break;
        case "r":
          inputMClear();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <StyledButtons>
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
        <ButtonImage src={plusMinusIcon} alt="+/-" />
      </Button>
      <Button type="brown" clickFn={inputSqrt}>
        <FontAwesomeIcon icon={faSquareRootAlt} />
      </Button>
      <Button type="black" clickFn={() => inputNumber(7)}>
        7
      </Button>
      <Button type="black" clickFn={() => inputNumber(8)}>
        8
      </Button>
      <Button type="black" clickFn={() => inputNumber(9)}>
        9
      </Button>
      <Button type="brown" clickFn={inputDivideBy}>
        <FontAwesomeIcon icon={faDivide} />
      </Button>
      <Button type="brown" clickFn={inputPercent}>
        <FontAwesomeIcon icon={faPercent} />
      </Button>
      <Button type="black" clickFn={() => inputNumber(4)}>
        4
      </Button>
      <Button type="black" clickFn={() => inputNumber(5)}>
        5
      </Button>
      <Button type="black" clickFn={() => inputNumber(6)}>
        6
      </Button>
      <Button type="brown" clickFn={inputTimes}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Button type="brown" clickFn={inputInverse}>
        <span>
          X<sup>-1</sup>
        </span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(1)}>
        1
      </Button>
      <Button type="black" clickFn={() => inputNumber(2)}>
        2
      </Button>
      <Button type="black" clickFn={() => inputNumber(3)}>
        3
      </Button>
      <Button type="brown" clickFn={inputMinus}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Button type="brown" clickFn={inputClear}>
        <span>CE</span>
        <span>C</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(0)}>
        0
      </Button>
      {/* TODO put a circular div in here instead */}
      <Button type="brown" clickFn={inputDecimal}>
        <WhiteDot />
      </Button>
      <Button type="yellow" clickFn={() => inputEquals()}>
        <FontAwesomeIcon icon={faEquals} />
      </Button>
      <Button type="brown" clickFn={inputPlus}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </StyledButtons>
  );
};

export default Buttons;
