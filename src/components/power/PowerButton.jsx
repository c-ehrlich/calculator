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
    props.onoff ? "white" : "transparent"};
`;

const StyledPowerButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.onoff ? "green" : "red")};
  box-shadow: inset 0 3px 3px -2px white, 0 3px 13px 0px black;
`;

const PowerButton = ({ onoff }) => {
  const powerOn = useStore((state) => state.powerOn);
  const powerOff = useStore((state) => state.powerOff);

  return (
    <PowerButtonArea>
      <StyledPowerButton
        onClick={onoff ? powerOn : powerOff}
        onoff={onoff}
      />
      <PowerButtonBigDot onoff={onoff} />
    </PowerButtonArea>
  );
};

export default PowerButton;
