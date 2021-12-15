import { useMemo } from "react";
import useStore from "../../store";
import styled from "styled-components";
import DisplayBorder from "./DisplayBorder";

const DisplayText = styled.span`
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

const truncateNumberForDisplay = (num) => {
  // TODO truncate numbers for display
  return num;
};

const Display = () => {
  const power = useStore((state) => state.power);
  // const display = useStore((state) => state.display); // see if we can do it without this
  const displayLeftSide = useStore((state) => state.displayLeftSide);

  const currentCalc = useStore((state) => state.currentCalc);
  const currentInputNum = useStore((state) => state.currentInputNum);
  const calcError = useStore((state) => state.calcError);

  const displayString = useMemo(() => {
    console.log("displayString");
    console.log("currentCalc: " + currentCalc);
    console.log("currentInputNum: " + currentInputNum);
    console.log("calcError: " + calcError);
    if (calcError) return "ERR"
    if (currentInputNum === null && currentCalc === null) return 0;
    if (currentInputNum === null) return currentCalc;
    return truncateNumberForDisplay(currentInputNum)
  }, [currentCalc, currentInputNum, calcError]);

  return (
    <DisplayBorder>
      <DisplayText className={power && "power"}>{displayLeftSide}</DisplayText>
      <DisplayText id="display" className={power && "power"}>
        {displayString}
      </DisplayText>
    </DisplayBorder>
  );
};

export default Display;
