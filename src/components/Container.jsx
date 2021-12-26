import styled from "styled-components";
import pageBG from "../media/bg-2400.jpg";
import calcBG from "../media/CalcBG.png";

const padding = 16;

const Background = styled.div`
  height: calc(100vh - ${padding * 2}px); /* compensate for padding */
  width: calc(100vw - ${padding * 2}px); /* compensate for padding */
  overflow: scroll;
  display: flex;
  color: red;
  padding: ${padding}px;
  /* align-items: center;
  justify-content: center; */
  background: url(${pageBG}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const CalculatorOuterContainer = styled.div`
  border-left: 1.5px solid rgb(50, 50, 50);
  border-top: 1.5px solid rgb(50, 50, 50);
  border-right: 1px solid rgb(20, 20, 20);
  border-bottom: 1px solid rgb(20, 20, 20);
  background: rgb(246, 246, 246);
  background: linear-gradient(
    120.5deg,
    rgba(62, 62, 62, 1) 0.5%,
    white 1.3%,
    white 46.5%,
    rgba(62, 62, 62, 1) 50.5%,
    rgba(33, 33, 33, 1) 54.5%
  );
  padding: 4px;
  margin: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  box-shadow: 
    2px 2px 5px 2px rgba(0, 0, 0, 0.7),
    4px 7px 5px 5px rgba(0, 0, 0, 0.5),
    5px 10px 5px 10px rgba(0, 0, 0, 0.2),
    inset 0 0 3px 3px rgba(0, 0, 0, 0.25);
`;

const CalculatorInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 48px 32px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 44px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);

  ${"" /* created with https://www.cssmatic.com/noise-texture */}
  background-image: url(${calcBG});
  background-repeat: repeat;
`;

const Container = (props) => {
  return (
    <Background>
      <CalculatorOuterContainer>
        <CalculatorInnerContainer>{props.children}</CalculatorInnerContainer>
      </CalculatorOuterContainer>
    </Background>
  );
};

export default Container;
