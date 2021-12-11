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
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const PowerButtonSmallDot = styled.div`
  width: 5px;
  height: 5px;
  color: white;
  background-color: white;
  border-radius: 50%;
`;

const PowerButtonBigDot = styled.div`
  width: 10px;
  height: 10px;
  border: 4px solid white;
  border-radius: 50%;
  background-color: ${(props) =>
    props.onoff === "on" ? "white" : "transparent"};
`;

const StyledPowerButton = styled.button`
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
      >
        {onoff}
      </StyledPowerButton>
      <PowerButtonSmallDot />
      <PowerButtonBigDot onoff={onoff} />
    </PowerButtonArea>
  );
};

export default PowerButton;
