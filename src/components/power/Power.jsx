import React from "react";
import styled from "styled-components";
import useStore from "../../store";

import PowerButton from "./PowerButton";

const StyledPowerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  gap: 16px;
`;

const Power = (props) => {
  const power = useStore(state => state.power)
  return (
    <StyledPowerContainer>
      <PowerButton onoff="on" />
      <PowerButton onoff="off" />
      <div>{power ? "on" : "off"}</div>
    </StyledPowerContainer>
  );
};

export default Power;
