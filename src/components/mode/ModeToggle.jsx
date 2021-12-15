import styled from "styled-components";
import useStore from "../../store";

const VerticalSwitch = styled.input`
  display: none;
`;

const VerticalSwitchLabel = styled.label`
  position: relative;
  display: block;
  float: left;
  overflow: hidden;

  width: 23px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 12px;
  background: #333;

  cursor: pointer;

  &:before {
    position: absolute;
    display: block;
    width: 23px;
    height: 50px;
    border-radius: 11px;
    background: #2c2e2c;
    box-shadow: inset 0 2px 5px 1px black;
    content: "";
    transition: background-position 0.05s ease-in-out;
  }
`;

const VerticalSwitchToggle = styled.i`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 19px;
  height: 19px;
  border: 1px solid #111111;
  border-radius: 50%;
  background: #3c3d3c;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.4);
  transition: top 0.05s ease-in-out;

  &.checked {
    top: 28px;
  }

  ${"" /* put a div in here? */}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalSwitchToggleHandle = styled.div`
  height: 3px;
  width: 50px;
  background-color: #3c3d3c;
  box-shadow: 0 0.5px 3px 2px black;
`;

const ModeToggle = () => {
  const sciMode = useStore((state) => state.sciMode);
  const sciModeOn = useStore((state) => state.sciModeOn);
  const sciModeOff = useStore((state) => state.sciModeOff);

  return (
    <>
      <VerticalSwitch type="checkbox" id="check" />
      <VerticalSwitchLabel
        htmlFor="check"
        className={sciMode && "checked"}
        onClick={sciMode ? sciModeOff : sciModeOn}
      >
        <VerticalSwitchToggle className={!sciMode && "checked"}>
          <VerticalSwitchToggleHandle />
        </VerticalSwitchToggle>
      </VerticalSwitchLabel>
    </>
  );
};

export default ModeToggle;
