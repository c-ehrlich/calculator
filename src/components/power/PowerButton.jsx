import styled from "styled-components";
import useStore from "../../store";

import { embossedTextSvg, visuallyHidden } from "../../styles";

const PowerButtonArea = styled.div`
  display: flex;
  width: 48px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PowerButtonBigDot = styled.div`
  ${embossedTextSvg}
  width: 6px;
  height: 6px;
  border: 2px solid white;
  border-radius: 50%;

  &.on {
    background-color: white;
  }
`;

const StyledPowerButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: inset 14px 23px 12px -24px rgba(255, 255, 255, 0.8),
    1.5px 3px 7px 2px black, 0 0 10px -2px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: inset 14px 23px 12px -24px rgba(255, 255, 255, 0.8),
      1.5px 3px 7px 2px black, 0 0 10px -2px rgba(0, 0, 0, 0.3),
      0 0 15px 0px rgba(255, 255, 255, 0.7);
  }

  &.on {
    background-color: rgb(0, 100, 0);

    &:active {
      border: 0.5px solid black;
      box-shadow: 1.5px 3px 7px 2px black, 0 0 10px -2px rgba(0, 0, 0, 0.3),
        0 0 15px 0px rgba(255, 255, 255, 0.7), inset 3px 3px 10px rgba(0, 46, 0, 0.9),
        inset -3px -3px 10px rgba(110, 186, 110, 0.9);
    }
  }

  &.off {
    background-color: rgb(220, 0, 0);

    &:active {
      border: 0.5px solid black;
      box-shadow: 1.5px 3px 7px 2px black, 0 0 10px -2px rgba(0, 0, 0, 0.3),
        0 0 15px 0px rgba(255, 255, 255, 0.7), inset 3px 3px 10px rgba(56, 0, 0, 0.9),
        inset -3px -3px 10px rgba(255, 148, 148, 0.9);
    }
  }
`;

// Create elements that screen readers can see, but don't modify the visual
// UI in any way
const ForScreenReader = styled.div`
  ${visuallyHidden}
`;

const PowerButton = ({ onoff }) => {
  const powerOn = useStore((state) => state.powerOn);
  const powerOff = useStore((state) => state.powerOff);

  return (
    <PowerButtonArea>
      <StyledPowerButton
        onClick={onoff ? powerOn : powerOff}
        className={onoff ? "on" : "off"}
      >
        <ForScreenReader>
          {onoff ? "Power On" : "Power Off"}
        </ForScreenReader>
      </StyledPowerButton>
      <PowerButtonBigDot className={onoff ? "on" : "off"} />
    </PowerButtonArea>
  );
};

export default PowerButton;
