import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  position: relative;

  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-family: "AGRegular";
  white-space: nowrap;
  border-radius: 50%;
  box-shadow: ${"" /* !!!! the yellow buttons have their own shadows */} inset
      17px 24px 40px -30px rgba(255, 255, 255, 0.4),
    inset 6px 9px 5px -10px rgba(255, 255, 255, 0.3),
    4px 7px 7px rgba(0, 0, 0, 0.3), 1.5px 3px 7px rgba(0, 0, 0, 0.6);
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: inset 17px 24px 40px -30px rgba(255, 255, 255, 0.4),
      inset 6px 9px 5px -10px rgba(255, 255, 255, 0.3),
      0 0 15px -4px rgba(255, 255, 255, 0.7);
  }

  &.black {
    background-color: black;
    color: white;
    font-size: 24px;

    &:active {
      box-shadow: 0 0 15px -4px rgba(255, 255, 255, 0.7),
        inset 7px 7px 20px rgba(0, 0, 0, 0.9),
        inset -7px -7px 20px rgba(255, 255, 255, 0.4);
      padding-top: 1.2px;
    }
  }

  &.brown {
    background-color: rgb(54, 20, 2);
    color: white;
    font-size: 17px;

    &:active {
      box-shadow: 0 0 15px -4px rgba(255, 255, 255, 0.7),
        inset 7px 7px 20px rgba(26, 9, 1, 0.9),
        inset -7px -7px 20px rgba(255, 255, 255, 0.4);
      padding-top: 3px;
    }
  }

  &.green {
    background-color: rgb(0, 46, 19);
    color: white;
    font-size: 20px;

    &:active {
      box-shadow: 0 0 15px -4px rgba(255, 255, 255, 0.7),
        inset 7px 7px 20px rgba(0, 28, 12, 0.9),
        inset -7px -7px 20px rgba(4, 145, 65, 0.5);
      padding-top: 2.5px;
    }
  }

  &.yellow {
    background-color: rgb(217, 145, 0);
    color: black;
    font-size: 18px;
    box-shadow: inset 17px 24px 40px -30px rgba(255, 255, 255, 0.9),
      inset 6px 9px 5px -10px rgba(255, 255, 255, 0.5),
      4px 7px 7px rgba(0, 0, 0, 0.2), 1.5px 3px 7px rgba(0, 0, 0, 0.5);

    &:hover {
      box-shadow: 0 0 15px -4px rgba(255, 255, 255, 0.7),
        inset 17px 24px 40px -30px rgba(255, 255, 255, 0.9),
        inset 6px 9px 5px -10px rgba(255, 255, 255, 0.5);
        
    }

    &:active {
      box-shadow: 0 0 15px -4px rgba(255, 255, 255, 0.7),
        inset 7px 7px 20px rgba(92, 60, 1, 0.8),
        inset -7px -7px 25px rgba(255, 255, 255, 0.5);
      padding-top: 3px;
    }
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      id={props.passDownId}
      className={`${props.type}`}
      onClick={props.clickFn && props.clickFn}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
