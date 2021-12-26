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
  const displayLeftSide = useStore((state) => state.displayLeftSide);
  const haveMemory = useStore((state) => state.haveMemory);

  const display = useStore((state) => state.display);

  return (
    <DisplayBorder>
      <DisplayLeft>
        <DisplaySmallText className={power && "power"}>
          {displayLeftSide}
        </DisplaySmallText>
        <DisplaySmallText className={!haveMemory && "hidden"}>
          {haveMemory && "M"}
        </DisplaySmallText>
      </DisplayLeft>
      <DisplayMainText id="display" className={power && "power"}>
        {display}
      </DisplayMainText>
    </DisplayBorder>
  );
};

export default Display;
