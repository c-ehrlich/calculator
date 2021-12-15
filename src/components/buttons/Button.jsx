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
  box-shadow: 0px 3px 8px #111, inset 0px 2px 3px #777;
  cursor: pointer;
  ${(props) => {
    switch (props.type) {
      case "black":
        return `background-color: black;
                color: white;
                font-size: 24px;`;
      case "brown":
        return `background-color: rgb(88, 65, 15);
                color: white;
                font-size: 17px;`;
      case "green":
        return `background-color: rgb(1, 75, 32);
                color: white;
                font-size: 20px;`;
      case "yellow":
        return `background-color: rgb(253, 219, 28);
                color: black;
                font-size: 18px;`;
      default:
        return `background-color: pink;`;
    }
  }}
`;

const Button = (props) => {
  return (
    <StyledButton
      id={props.passDownId}
      type={props.type}
      onClick={props.clickFn && props.clickFn}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
