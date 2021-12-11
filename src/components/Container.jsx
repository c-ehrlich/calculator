import React from "react";
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
  gap: 1rem;

  ${'' /* created with https://www.cssmatic.com/noise-texture */}
  background-image: url(${bg});
  background-repeat: repeat;

  border: 6px outset rgba(0, 0, 0, 0.4);
  padding: 2rem 1.5rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
`;

const Container = (props) => {
  return (
    <StyledContainer>
      <InnerContainer>{props.children}</InnerContainer>
    </StyledContainer>
  );
};

export default Container;