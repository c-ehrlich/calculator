import { useMemo } from "react";
import useStore from "../../store";
import styled from "styled-components";
import DisplayBorder from "./DisplayBorder";

const DisplayMainText = styled.span`
  margin: 0;
  padding: 0;
  color: rgb(106, 117, 93);
  font-family: "D7Mono";
  font-size: 36px;
  height: 32px;

  display: flex;
  align-items: &.power {
    color: rgba(0, 0, 0, 0.55);
  }
`;

const DisplaySmallText = styled.span`
  margin: 0;
  padding: 0;
  font-family: "D7Mono";
  color: rgb(106, 117, 93);
  font-size: 14px;
  height: 14px;
`;

const DisplayLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 2px 0;
`;

const Display = () => {
  const power = useStore((state) => state.power);
  // const display = useStore((state) => state.display); // see if we can do it without this
  const displayLeftSide = useStore((state) => state.displayLeftSide);
  const memory = useStore((state) => state.memory);

  const currentCalc = useStore((state) => state.currentCalc);
  const inputNum = useStore((state) => state.inputNum);
  const result = useStore((state) => state.result);

  const lastInput = useStore((state) => state.lastInput);
  const calcError = useStore((state) => state.calcError);

  const displayString = useMemo(() => {
    console.log("displayString");
    console.log("currentCalc: " + currentCalc);
    console.log("inputNum: " + inputNum);
    console.log("calcError: " + calcError);
    if (calcError) return "ERR";

    if (["plus", "minus", "times", "divideby", "equals"].indexOf(lastInput) !== -1) {
      return result;
    }
    return inputNum;
    // if (inputNum === 0 && currentCalc === 0) return 0;
    // if (inputNum === 0) return currentCalc;
    // return truncateNumberForDisplay(inputNum)
  }, [currentCalc, inputNum, calcError, result, lastInput]);

  return (
    <DisplayBorder>
      <DisplayLeft>
        <DisplaySmallText className={power && "power"}>{displayLeftSide}</DisplaySmallText>
        <DisplaySmallText className={memory === 0 && "hidden"}>{memory !== 0 && "M"}</DisplaySmallText>
      </DisplayLeft>
      <DisplayMainText id="display" className={power && "power"}>
        {displayString}
        {/* TODO using inputNum for now for debugging, but switch back to inputString soon */}
        {/* {displayString} */}
      </DisplayMainText>
    </DisplayBorder>
  );
};

export default Display;
