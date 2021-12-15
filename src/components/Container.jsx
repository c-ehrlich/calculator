import styled from "styled-components";

import bg from "../media/CalcBG.png";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  color: red;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${'' /* created with https://www.cssmatic.com/noise-texture */}
  background-image: url(${bg});
  background-repeat: repeat;

  border: 6px outset rgba(0, 0, 0, 0.4);
  padding: 48px 32px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

const Container = (props) => {
  return (
    <StyledContainer>
      <InnerContainer>{props.children}</InnerContainer>
    </StyledContainer>
  );
};

export default Container;
