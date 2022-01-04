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
import { visuallyHidden } from "../../styles";

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

// Create elements that screen readers can see, but don't modify the visual
// UI in any way
const ForScreenReader = styled.div`
  ${visuallyHidden}
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
        case "enter":
          inputEquals();
          break;
        case "c":
        case "backspace":
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
        <ForScreenReader>Add to memory</ForScreenReader>
      </Button>
      <Button type="green" clickFn={inputMMinus}>
        <span>M –</span>
        <ForScreenReader>Subtract from memory</ForScreenReader>
      </Button>
      <Button type="green" clickFn={inputMRecall}>
        <span>MR</span>
        <ForScreenReader>Recall Memory</ForScreenReader>
      </Button>
      <Button type="green" clickFn={inputMClear}>
        <span>MC</span>
        <ForScreenReader>Clear Memory</ForScreenReader>
      </Button>
      <Button type="green" clickFn={inputNegative}>
        <ButtonImage src={plusMinusIcon} alt="+/-" />
        <ForScreenReader>Negative</ForScreenReader>
      </Button>
      <Button type="brown" clickFn={inputSqrt}>
        <FontAwesomeIcon icon={faSquareRootAlt} />
        <ForScreenReader>Square Root</ForScreenReader>
      </Button>
      <Button type="black" clickFn={() => inputNumber(7)}>
        <span>7</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(8)}>
        <span>8</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(9)}>
        <span>9</span>
      </Button>
      <Button type="brown" clickFn={inputDivideBy}>
        <FontAwesomeIcon icon={faDivide} />
        <ForScreenReader>Divide</ForScreenReader>
      </Button>
      <Button type="brown" clickFn={inputPercent}>
        <FontAwesomeIcon icon={faPercent} />
        <ForScreenReader>Percent</ForScreenReader>
      </Button>
      <Button type="black" clickFn={() => inputNumber(4)}>
        <span>4</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(5)}>
        <span>5</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(6)}>
        <span>6</span>
      </Button>
      <Button type="brown" clickFn={inputTimes}>
        <FontAwesomeIcon icon={faTimes} />
        <ForScreenReader>Multiply</ForScreenReader>
      </Button>
      <Button type="brown" clickFn={inputInverse}>
        <span>
          X<sup>-1</sup>
        </span>
        <ForScreenReader>Inverse</ForScreenReader>
      </Button>
      <Button type="black" clickFn={() => inputNumber(1)}>
        <span>1</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(2)}>
        <span>2</span>
      </Button>
      <Button type="black" clickFn={() => inputNumber(3)}>
        <span>3</span>
      </Button>
      <Button type="brown" clickFn={inputMinus}>
        <FontAwesomeIcon icon={faMinus} />
        <ForScreenReader>Minus</ForScreenReader>
      </Button>
      <Button type="brown" clickFn={inputClear}>
        <span>CE</span>
        <span>C</span>
        <ForScreenReader>Clear Input / Clear All</ForScreenReader>
      </Button>
      <Button type="black" clickFn={() => inputNumber(0)}>
        <span>0</span>
      </Button>
      <Button type="brown" clickFn={inputDecimal}>
        <WhiteDot />
        <ForScreenReader>Decimal Point</ForScreenReader>
      </Button>
      <Button type="yellow" clickFn={() => inputEquals()}>
        <FontAwesomeIcon icon={faEquals} />
        <ForScreenReader>Equals</ForScreenReader>
      </Button>
      <Button type="brown" clickFn={inputPlus}>
        <FontAwesomeIcon icon={faPlus} />
        <ForScreenReader>Plus</ForScreenReader>
      </Button>
    </StyledButtons>
  );
};

export default Buttons;
