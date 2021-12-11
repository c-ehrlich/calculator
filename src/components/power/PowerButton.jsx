import zustand from "zustand";
import styled from "styled-components";
import useStore from "../../store";

// const PowerOnButton = styled.StyledPowerButton`
//   background-color: green;
// `;

// const PowerOffButton = styled.StyledPowerButton`
//   background-color: red;
// `;

const PowerButtonArea = styled.div`
  display: flex;
  width: 48px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PowerButtonBigDot = styled.div`
  width: 6px;
  height: 6px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${(props) =>
    props.onoff === "on" ? "white" : "transparent"};
`;

const StyledPowerButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.onoff === "on" ? "green" : "red")};
`;

const PowerButton = ({ onoff }) => {
  const powerOn = useStore((state) => state.powerOn);
  const powerOff = useStore((state) => state.powerOff);

  return (
    <PowerButtonArea>
      <StyledPowerButton
        onClick={onoff === "on" ? powerOn : powerOff}
        onoff={onoff}
      />
      <PowerButtonBigDot onoff={onoff} />
    </PowerButtonArea>
  );
};

export default PowerButton;
