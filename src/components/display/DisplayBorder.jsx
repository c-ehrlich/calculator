import styled from "styled-components";
import useStore from "../../store";

const StyledDisplayBorder = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.9);
  border-left: 1px solid rgba(0, 0, 0, 0.7);
  border-right: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.9);
`;

const StyledDisplay = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 3px solid red;
  background-color: rgb(154, 159, 134);
  display: flex;
  justify-content: flex-end;
  padding: 8px 24px;

  border-top: 8px inset rgba(0, 0, 0, 0.9);
  border-left: 8px inset rgba(0, 0, 0, 0.8);
  border-bottom: 16px inset rgba(0, 0, 0, 0.7);
  border-right: 8px inset rgba(0, 0, 0, 0.8);

  box-shadow: inset 0px 0px 5px -2px rgba(0, 0, 0, 0.9);
`;

const DisplayInner = styled.div`
  width: 100%;
  background-color: rgb(106, 117, 93);
  display: flex;
  justify-content: flex-end;
  padding: 6px 12px 2px 12px;
  border-radius: 8px;
  box-shadow: inset 0px 3px 8px -2px rgba(0, 0, 0, 0.9);

  transition: 0.1s ease-in;

  display: flex;
  justify-content: space-between;

  &.power {
    background-color: rgb(200, 214, 183);
  }
`;

const DisplayBorder = (props) => {
  const power = useStore((state) => state.power);

  return (
    <StyledDisplayBorder>
      <StyledDisplay>
        <DisplayInner className={power && "power"}>
          {props.children}
        </DisplayInner>
      </StyledDisplay>
    </StyledDisplayBorder>
  );
};

export default DisplayBorder;
