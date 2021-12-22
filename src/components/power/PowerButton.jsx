import styled from "styled-components";
import useStore from "../../store";

import { embossedTextSvg } from "../../styles";

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
  background-color: ${(props) => (props.onoff ? "white" : "transparent")};
`;

const StyledPowerButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.onoff ? "rgb(0, 100, 0)" : "rgb(220, 0, 0)")};
  box-shadow: inset 14px 23px 12px -24px rgba(255, 255, 255, 0.8),
    1.5px 3px 7px 2px black,
    0 0 10px -2px rgba(0, 0, 0, 0.3);
`;

const PowerButton = ({ onoff }) => {
  const powerOn = useStore((state) => state.powerOn);
  const powerOff = useStore((state) => state.powerOff);

  return (
    <PowerButtonArea>
      <StyledPowerButton onClick={onoff ? powerOn : powerOff} onoff={onoff} />
      <PowerButtonBigDot onoff={onoff} />
    </PowerButtonArea>
  );
};

export default PowerButton;
