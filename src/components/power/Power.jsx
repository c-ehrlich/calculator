import React from "react";
import styled from "styled-components";
import useStore from "../../store";

import PowerButton from "./PowerButton";

const StyledPowerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48px);
  gap: 16px;
`;

const Power = (props) => {
  const power = useStore(state => state.power)
  return (
    <StyledPowerContainer>
      <PowerButton onoff={true} power={power} />
      <PowerButton onoff={false} power={power} />
    </StyledPowerContainer>
  );
};

export default Power;
